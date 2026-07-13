import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileBlock from './MobileBlock'
import Topbar from "./Topbar";

export default function Layout() {
  return (
    <MobileBlock>
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Topbar />
          <main className="flex-1 bg-[#EFF1F4] overflow-y-auto p-6">
            <Outlet />
          </main>
        </div>
    </MobileBlock>
  )
}