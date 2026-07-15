// Usage: 
// <PageHeader
//   title="Page Title"
//   subtitle="Asset Inventory"
//   actions={[
//      { label: "Audit Mode", variant: "outline", onClick: () => {} },
//      { label: "Quick Report", variant: "solid", onClick: () => {} },
//  ]}
// />

import { Plus } from "lucide-react"

export default function PageHeader({ title, subtitle, actions =[], primaryAction }) {
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
        
        {primaryAction && (
          <button
            onClick={primaryAction.onClick}
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white text-sm font-bold uppercase tracking-wide hover:bg-slate-800 transition-colors"
          >
            <Plus size={16} strokeWidth={2.5} />
            {primaryAction.label}
          </button>
        )}
      </div>
    </div>
  );
}