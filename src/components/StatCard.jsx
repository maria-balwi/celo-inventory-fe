import { div, p } from "framer-motion/client";

export default function StatCard({ label, value, sub, highlight = false }) {
  return (
    <div className="bg-[#FFF] border border-[#E0E2E5] rounded-lg p-5">
      <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-1.5">
        {label}
      </p>
      <p className={'text-2xl font-bold tracking-tight ${highlight ? "text-red-400" : "text-slate-100"}'}>
        {value}
      </p>
      {sub && (
        <p className="text-xs text-slate-500 mt-1.5">{sub}</p>
      )}
    </div>
  )
}