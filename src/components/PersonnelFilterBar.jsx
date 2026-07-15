import { Search, Filter } from "lucide-react"

export default function PersonnelFilterBar({
	search, onSearchChange,
	departments = [], department, onDepartmentChange,
	onMoreFilters
}) {
  return (
		<>
			<div className="flex flex-wrap items-center gap-3 px-4 py-4 border-b border-slate-200">
				{onSearchChange &&  (
					<div className="relative flex-1 min-w-[240px]">
						<Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
						<input 
							type="text"
							placeholder="Search by Name, Employee ID, or equipment..."
							value={search}
							onChange={(e) => onSearchChange(e.target.value)}
							className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition-colors"
						 />
					</div>
				)}

				{departments.length > 0 && (
					<select>
						{departments.map((d) => <option key={d} value={d}>{d}</option>)}
					</select>
				)}

				{/* <button
					onClick={onMoreFilters}
					className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 text-sm font-semibold text-slate-700 uppercase traking-wide hover:bg-slate-50 transition-colors"
				>
					<Filter size={15} />
					More Filters
				</button> */}
			</div>
		</>
	)
}