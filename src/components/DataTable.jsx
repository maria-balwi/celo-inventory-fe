// Usage:
// const columns = [
//   { key: "id",     label: "Asset ID" },
//   { key: "status", label: "Status", render: (val) => <StatusBadge status={val} /> },
//   { key: "actions",label: "Actions", render: (_, row) => (
//     <button onClick={() => handleView(row.id)}>View</button>
//   )},
// ];
// <DataTable columns={columns} data={filteredAssets} emptyMessage="No assets found." />

export default function DataTable({ columns = [], data = [], emptyMessage = "No results found." }) {
  return (
    <>
      <div className="bg-white border border-[#e2e8f0] rounded-lg p-6 flex flex-col">
        {/* <p className="text-sm font-semibold text-black-400 uppercase tracking-widest mb-4">

        </p> */}
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#252d3d]">
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
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-12 text-center text-black-800 text-sm"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr
                  key={row.id ?? rowIndex}
                  className="border-b border-[#252d3d] last:border-0 hover:bg-[#1a2030] transition-colors"
                >
                  {columns.map((col) => (
                    <td key={col.key} className="px-4 py-3 text-black-300">
                      {col.render
                        ? col.render(row[col.key], row)
                        : (row[col.key] ?? <span className="text-black-600">-</span>)
                      }
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}