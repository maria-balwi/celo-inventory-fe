// Usage:
// <FilterBar
//   search={search} onSearchChange={setSearch}
//   categories={["All Categories","Laptop","Headset"]}
//   category={category} onCategoryChange={setCategory}
//   statuses={["All Statuses","In Use","Available","Repair"]}
//   status={status} onStatusChange={setStatus}
// />

import { Filter, Download } from "lucide-react"

export default function FilterBar({
	categories = [], category, onCategoryChange, 
	statuses = [], status, onStatusChange,
	onAdvancedFilters, onExportCSV,
}) {
	return (
		<>
			<div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-slate-200">
				<div className="flex flex-wrap items-center gap-4">
					{categories.length > 0 && (
						<label className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
							Category:
							<select
								value={category}
								onChange={(e) => onCategoryChange(e.target.value)}
								className="px-3 py-1.5 rounded-md bg-white border border-slate-300 text-sm font-normal text-slate-700 normal-case tracking-normal focus:outline-none focus:border-slate-400 cursor-pointer"
							>
								{categories.map((c) => <option key={c} value={c}>{c}</option>)}
							</select>
						</label>
					)}

					{statuses.length > 0 && (
						<label className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
							Status:
							<select
								value={status}
								onChange={(e) => onStatusChange(e.target.value)}
								className="px-3 py-1.5 rounded-md bg-white border border-slate-300 text-sm font-normal text-slate-700 normal-case tracking-normal focus:outline-none focus:border-slate-400 cursor-pointer"
							>
								{statuses.map((s) => <option key={s} value={s}>{s}</option>)}
							</select>
						</label>
					)}
				</div>

				<div className="flex items-center gap-5">
					<button
						onClick={onAdvancedFilters}
						className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
					>
						<Download size={15} />
						Export to CSV
					</button>
				</div>
			</div>
		</>
	)
}