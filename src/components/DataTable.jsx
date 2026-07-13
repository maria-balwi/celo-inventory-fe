import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FilterBar from "./FilterBar";

export default function DataTable({
  columns = [],
  data = [],
  emptyMessage = "No results found.",
  categories = [],       // e.g. ["All Categories", "Laptop", "Headset", "Chair"]
  statuses = [],         // e.g. ["All Statuses", "In Use", "Available", "Repair"]
  categoryField = "category", // key in your row objects — change if yours differs
  statusField = "status",
  pageSize = 5,
  onAdvancedFilters,
  onExportCSV,
}) {
  const [category, setCategory] = useState(categories[0] ?? "");
  const [status, setStatus] = useState(statuses[0] ?? "");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    return data.filter((row) => {
      const matchesCategory = !category || category === categories[0] || row[categoryField] === category;
      const matchesStatus = !status || status === statuses[0] || row[statusField] === status;
      return matchesCategory && matchesStatus;
    });
  }, [data, category, status, categories, statuses, categoryField, statusField]);

  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const paginated = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);

  const startItem = totalItems === 0 ? 0 : (safePage - 1) * pageSize + 1;
  const endItem = Math.min(safePage * pageSize, totalItems);

  const pageNumbers = useMemo(() => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (safePage <= 3) return [1, 2, 3, "...", totalPages];
    if (safePage >= totalPages - 2) return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    return [1, "...", safePage, "...", totalPages];
  }, [totalPages, safePage]);

  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col">
      <FilterBar
        categories={categories}
        category={category}
        onCategoryChange={(v) => { setCategory(v); setCurrentPage(1); }}
        statuses={statuses}
        status={status}
        onStatusChange={(v) => { setStatus(v); setCurrentPage(1); }}
        onAdvancedFilters={onAdvancedFilters}
        onExportCSV={onExportCSV}
      />

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 text-left text-sm font-bold text-slate-700 uppercase tracking-widest"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {paginated.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-12 text-center text-slate-500 text-sm">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            paginated.map((row, rowIndex) => (
              <tr
                key={row.id ?? rowIndex}
                className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors"
              >
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 text-slate-600">
                    {col.render
                      ? col.render(row[col.key], row)
                      : (row[col.key] ?? <span className="text-slate-300">-</span>)
                    }
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="flex items-center justify-between px-4 py-3 border-t border-slate-200">
        <span className="text-sm text-slate-500">
          Showing {startItem} to {endItem} of {totalItems.toLocaleString()} assets
        </span>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={safePage === 1}
            className="p-1.5 rounded-md text-slate-500 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronLeft size={16} />
          </button>

          {pageNumbers.map((p, i) =>
            p === "..." ? (
              <span key={`ellipsis-${i}`} className="px-2 text-sm text-slate-400">...</span>
            ) : (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`min-w-[28px] h-7 px-1 rounded-md text-sm font-medium transition-colors ${
                  p === safePage ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {p}
              </button>
            )
          )}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={safePage === totalPages}
            className="p-1.5 rounded-md text-slate-500 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}