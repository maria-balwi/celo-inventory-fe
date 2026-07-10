// Usage: 
// <PageHeader
//   title="Page Title"
//   subtitle="Asset Inventory"
//   actions={[
//      { label: "Audit Mode", variant: "outline", onClick: () => {} },
//      { label: "Quick Report", variant: "solid", onClick: () => {} },
//  ]}
// />

export default function PageHeader({ title, subtitle, actions =[] }) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-800">{title}</h1>
        {subtitle && <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>}
      </div>
      {actions.length > 0 && (
        <div className="flex items-center gap-2">
          {actions.map((action) => {
            <button
              key={action.label}
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
        </div>
      )}
    </div>
  );
}