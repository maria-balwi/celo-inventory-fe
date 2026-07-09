import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'

const navItems = [
    { label: "Dashboard", path: "/" },
    { label: "Asset Inventory", path: "/inventory" },
    { label: "Personnel Portal", path: "/personnel" },
    { label: "Reports & Analytics", path: "/reports" },
    { label: "Audit Logs", path: "/audit" },
];

export default function Sidebar() {
    return (
        <aside className="w-56 shrink-0 bg-[#EFF1F4] border-r border-[#252d3d] flex flex-col py-5 min-h-screen">

            <div className="flex items-center gap-2.5 px-4 pb-5 border-b border-[#252d3d] mb-3">
                <span className=""><img src={logo} alt="Logo" /></span>
                <div>
                    {/* <div className="text-lg font-semibold text-slate-500 leading-tight">CBSI</div> */}
                    <div className="text-sm text-slate-700">Inventory System</div>
                </div>
            </div>

            <nav className="flex flex-col gap-0.5 px-2.5 flex-1">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path == "/"}
                        className={({ isActive }) =>
                            "flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm transition-colors " + 
                        (isActive
                            ? "bg-[#1e2638] text-slate-100 font-medium border-1-[3px] border-indigo-500 pl-[7px]"
                            : "text-slate-800 hover:bg-[#1e2638] hover:text-slate-200" )
                        }
                    >
                        <span className="w-5 text-center text-sm">{item.icon}</span>
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="px-2.5 pt-4 mt-3 border-t-[#252d3d]">
                <button className="w-full bg-[#1e293b] text-slate-100 border border-slate-600 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors mb-3">
                    + New Asset Request
                </button>
                <div className="flex flex-col gap-1 px-1 ml-6">
                    <a href="#" className="text-sm text-slate-500 hover:text-slate-400 py-1.5 px-1.5 rounded-md transition-colors">Profile</a>
                    {/* <a href="#" className="text-sm text-slate-500 hover:text-slate-400 py-1.5 px-1.5 rounded-md transition-colors">Support</a> */}
                </div>
            </div>

        </aside>
    );
}