const DEFAULT_DATA = [
	{ department: "Operations", units: 5240 },
	{ department: "Recruitment", units: 4100 },
	{ department: "Business Development", units: 1850 },
	{ department: "IT", units: 1200 },
	{ department: "Finance", units: 920 },
	{ department: "HR", units: 1040 },
];

export default function AssetAllocationChart({ data = DEFAULT_DATA }) {
	const peak = Math.max(...data.map((d) => d.units));
	return (
		<>
			<div className="bg-white border border-[#e2e8f0] rounded-xl p-6">
				<div className="flex items-center justify-between mb-6">
					<p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
						Asset Allocation by Department
					</p>
					<button className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
						Full Report
					</button>
				</div>
				<div className="flex flex-col gap-5">
					{data.map((item) => {
						const pct = Math.round((item.units / peak) * 100);
						return (
							<div key={item.department}>
								<div className="flex items-center justify-between mb-2">
									<span className="text-sm font-semibold text-slate-700">{item.department}</span>
									<span className="text-sm text-slate-400">{item.units.toLocaleString()} units</span>
								</div>
								<div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
									<div className="h-full bg-slate-800 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}