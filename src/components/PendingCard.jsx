// Usage:
// <PendingHandoverCard
//   icon="transfer"
//   title="MacBook Pro M2 Assignment"
//   subtitle="Recipient:"
//   subtitleBold="James Miller"
//   subtitleExtra="• From Storage Center B"
//   due="DUE TODAY"
//   dueUrgent={true}
//   actionLabel="EXECUTE"
//   actionSolid={true}
//   onAction={() => {}}
// />

const ICONS = {
	transfer: ( 
		<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0-4-4m4 4-4 4M4 17h12m0 0-4-4m4 4-4 4" />
    </svg>
	), 
	key: (
		<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 0 1 21.75 8.25Z" />
    </svg>
	), 
	archive: (
		<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
    </svg>
	),
}

export default function PendingHandoverCard({
	icon = "transfer",
	title = "",
	subtitle = "",
	subtitleBold = "",
	subtitleExtra = "",
	due = "",
	dueUrgent = false,
	actionLabel = "EXECUTE",
	actionSolid = true,
	onAction = () => {},
}) {
	return (
		<>
			<div className="flex items-center gap-4 bg-[#F0F2F7] border border-[#e2e8f0] rounded-xl p-5">
				
				{/* Icon Box */}
				<div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
					{ICONS[icon] ?? ICONS.transfer}
				</div>

				<div className="flex-1 min-w-0">
					<p className="text-base font-semibold text-slate-800 leading-snug">{title}</p>
					<p className="text-sm text-slate-500 mt-0.5">
						{subtitle} <span className="font-semibold text-slate-700">{subtitleBold}</span>{subtitleExtra}
					</p>
				</div>

				<div className="flex flex-col items-end gap-2 shrink-0">
					<span className={`text-xs font-bold uppercase tracking-widest ${dueUrgent ? "text-red-500" : "text-slate-400"}`}>
						{due}
					</span>
					<button
						onClick={onAction}
						className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors
							${actionSolid
								? "bg-slate-800 text-white hover:bg-slate-700" 
								: "border border-slate-300 text-slate-700 hover:bg-slate-50"
							}`}
					>
						{actionLabel}
					</button>
				</div>

			</div>
		</>
	)
}