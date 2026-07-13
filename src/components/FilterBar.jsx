// Usage:
// <FilterBar
//   search={search} onSearchChange={setSearch}
//   categories={["All Categories","Laptop","Headset"]}
//   category={category} onCategoryChange={setCategory}
//   statuses={["All Statuses","In Use","Available","Repair"]}
//   status={status} onStatusChange={setStatus}
// />

export default function FilterBar({
	search, onSearchChange,
	categories = [], category, onCategoryChange, 
	statuses = [], status, onStatusChange,
}) {
	return (
		<>
			<div className="flex flex-wrap gap-3 mb-5">
				{onSearchChange && (
					<input
						type="text"
						placeholder="Search assets, models, assignees..."
						value={search}
						onChange={(e) => onSearchChange(e.target.value)}
						className="flex-1 min-w-[200px] px-3 py-2 rounded-lg bg-white border border-[#e2e8f0] text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition-colors"
					/>
				)}
				{categories.length > 0 && (
					<select
						value ={category}
						onChange={(e) => onCategoryChange(e.target.value)}
						className="px-3 py-2 rounded-lg bg-white border border-[#e2e8f0] text-sm text-slate-600 focus:outline-none focus:border-slate-400 transition-colors cursor-pointer"
					>
						{categories.map((c) => <option key={c} value={c}>{c}</option>)}
					</select>
				)}
				{statuses.length > 0 && (
					<select
						value={status}
						onChange={(e) => onStatusChange(e.target.value)}
						className="px-3 py-2 rounded-lg bg-white border border-[#e2e8f0] text-sm text-slate-600 focus:outline-none focus:border-slate-400 transition-colors cursor-pointer"
					>	
						{status.map((s) => <option key={s} value={s}>{s}</option>)}
					</select>
				)}
			</div>
		</>
	)
}