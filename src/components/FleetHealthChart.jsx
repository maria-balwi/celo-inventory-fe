import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const DEFAULT_DATA = [
	{ name: "Operational", value: 13100, color: "#1e293b" },    
	{ name: "Minor Issues", value: 956, color: "#94a3b8" },    
	{ name: "Critical Repair", value: 184, color: "#f87171" },    
];

const DOTS = {
	"Operational": "bg-slate-800",
	"Minor Issues": "bg-slate-400",
	"Critical Repair": "bg-red-400"
};

export default function FleetHealthChart({ data = DEFAULT_DATA, healthPct = 92 }) {
	return (
		<>
			<div className="h-full bg-white border border-[#e2e8f0] rounded-lg p-6 flex flex-col">
				<p className="text-sm font-semibold text-black-400 uppercase tracking-widest mb-4">
					Fleet Health
				</p>
				<div className="relative flex items-center justify-center" style={{ height: 200 }}>
					<ResponsiveContainer width="100%" height="100%">
						<PieChart>
							<Pie data={data} cx="50%" cy="50%"
								innerRadius={70} outerRadius={95}
								startAngle={90} endAngle={-270}
								paddingAngle={2} dataKey="value" strokeWidth={0}>
								{data.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
							</Pie>
							<Tooltip 
								formatter={(value) => [value.toLocaleString(), ""]}
								contentStyle={{ background: "#1e293b", border: "none", borderRadius: "8px", color: "#f1f5f9", fontSize: "12px" }}
							/>
						</PieChart>
					</ResponsiveContainer>

					<div className="absolute flex flex-col items-center pointer-events-none">
						<span className="text-3xl font-bold text-slate-800">{healthPct}%</span>
						<span className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-0.5">Healthy</span>
					</div>
				</div>

				<div className="flex flex-col gap-2.5 mt-4">
					{data.map((item) => (
						<div key={item.name} className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<span className={`w-2.5 h-2.5 rounded-full ${DOTS[item.name]}`} />
								<span className="text-sm text-slate-600">{item.name}</span>
							</div>
							<span className="text-sm font-medium text-slate-700">{item.value.toLocaleString()}</span>
						</div>
					))}
				</div>
			</div>
		</>
	)
}