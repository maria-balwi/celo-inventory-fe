// Usage:
// <PageHeader
//   title="Page Title"
//   subtitle="Asset Inventory"
//   actions={[
//      { label: "Audit Mode", variant: "outline", onClick: () => {} },
//      { label: "Quick Report", variant: "solid", onClick: () => {} },
//   ]}
//   primaryActions={[
//      { label: "New Equipment Assignment", icon: "plus", onClick: () => {} },
//   ]}
// />

const ICONS = {
  add: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
    </svg>
  ), 
  cancel: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
    </svg>
  ), 
  save: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
      <path d="M11 2H9v3h2z"/>
      <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"/>
    </svg>
  ), 
}

import { Plus } from "lucide-react"

export default function PageHeader({ title, subtitle, actions =[], primaryActions = [] }) {
  return (
    <div className="flex items-start justify-between mb-2">
      <div>
        <h1 className="text-2xl font-semibold text-slate-700">{title}</h1>
        {subtitle && <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-2">
        {actions.map((action, i) => {
          <button
            key={i}
            onClick={action.onClick}
            className={
              action.variant === "solid"
                ? "px-4 py-2 rounded-lg text-sm font-medium bg-slate-800 text-white hover:g-slate-700 transition-colors"
                : "px-4 py-2 rounded-lg text-sm font-medium border border-slate-300 text-slate-600 hover:bg-slate-50 transition-colors"
            }
          >
            {action.label}
          </button>
        })}
        
        {primaryActions.map((action, i) => (
          <button
            key={i}
            onClick={action.onClick}
            className={
              action.variant === "outline"
              ? "flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-300 text-slate-700 text-sm font-bold uppercase tracking-wide hover:bg-slate-50 transition-colors"
              : "flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white text-sm font-bold uppercase tracking-wide hover:bg-slate-800 transition-colors"
            }
          >
            {ICONS[action.icon]}
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}