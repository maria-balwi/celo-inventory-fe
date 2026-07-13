export default function Topbar({
	placeholder = "Search ...", 
	onAuditMode = () => {},
	onQuickExport = () => {},
}) {
	return (
		<>
			<div className="flex items-center gap-3 px-6 py-3 bg-white border-b border-[#e2e8f0] shrink-0">

				{/* SEARCH */}
				<div className="flex items-center flex-1 max-w-lg gap-2 px-3 py-2 rounded-lg border border-[#e2e8f0] bg-white hover:border-slate-300 transition-colors">
					<svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" viewBox=" 0 0 24 24" stroke="currentColor" strokeWidth={2}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
					</svg>
					<input 
						type="text"
						placeholder={placeholder}
						className="flex-1 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none bg-transparent"
					/>
				</div>

				{/* SPACER */}
				<div className="flex-1" />

				{/* AUDIT MODE BUTTON */}
				<button
					onClick={onAuditMode}
					className="px-4 py-2 rounded-lg text-sm font-medium border border-slate-300 text-slate-600 hover:bg-slate-50 transition-colors"
				>
					Audit Mode
				</button>

				{/* QUICK EXPORT BUTTON */}
				<button
					onClick={onQuickExport}
					className="px-4 py-2 rounded-lg text-sm font-medium bg-slate-800 text-white hover:bg-slate-700 transition-colors"
				>
					Quick Export
				</button>

				{/* DIVIDER */}
				<div className="w-px h-6 bg-slate-200 mx-1" />

				{/* NOTIFICATION BELL */}
				<button className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors relative">
					<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
					</svg>
				</button>
	
				{/* History icon */}
				<button className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors">
					<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</button>
	
				{/* Avatar */}
				<button className="w-9 h-9 rounded-full bg-slate-700 text-white text-xs font-semibold flex items-center justify-center hover:bg-slate-600 transition-colors">
					AD
				</button>

			</div>
		</>
	)
}