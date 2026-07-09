const config = {
  "In Use": { dot: "bg-blue-400", text: "text-blue-300", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  "Available": { dot: "bg-green-400", text: "text-green-300", bg: "bg-green-500/10", border: "border-green-500/20" },
  "Repair": { dot: "bg-red-400", text: "text-red-300", bg: "bg-red-500/10", border: "border-red-500/20" },
  "In Transit": { dot: "bg-blue-400", text: "text-blue-300", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  "Completed": { dot: "bg-green-400", text: "text-green-300", bg: "bg-green-500/10", border: "border-green-500/20" },
  "Delayed": { dot: "bg-red-400", text: "text-red-300", bg: "bg-red-500/10", border: "border-red-500/20" },
}

export default function StatusBadge({ status }) {
  const c = config[status] ?? {
    dot: "bg-slate-400", text: "text-slate-300",
    bg: "bg-slate-500/10", border: "border-slate-500/20",
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${c.bg} ${c.text} ${c.border}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {status}
    </span>
  );
}