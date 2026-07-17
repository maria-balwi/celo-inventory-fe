// Usage (embedded under an existing section title):
// <SearchSelectAssetCard
//   showHeader={false}
//   value={search}
//   onChange={setSearch}
//   onBrowse={() => setShowBrowseModal(true)}
//   selectedAssets={[
//     { id: 1, type: "laptop", name: 'MacBook Pro 16" M3', serial: "BPO-MBP-2024-X451" },
//   ]}
//   onRemoveAsset={(id) => removeAsset(id)}
// />

import AssetSelectionList from "./AssetSelectionList";

const SEARCH_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

export default function SearchSelectAssetCard({
  step,
  title = "Search / Select Asset",
  showHeader = true,
  value,
  onChange,
  onBrowse,
  selectedAssets = [],
  onRemoveAsset,
}) {
  return (
    <div className="flex flex-col gap-5">
      {showHeader && (
        <div className="flex items-center gap-3">
          {step && (
            <span className="w-9 h-9 rounded-full bg-slate-900 text-white text-sm font-bold flex items-center justify-center shrink-0">
              {step}
            </span>
          )}
          <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
        </div>
      )}

      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2">
            {SEARCH_ICON}
          </span>
          <input
            type="text"
            placeholder="Search by asset name, model, or ID..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition-colors"
          />
        </div>

        <button
          onClick={onBrowse}
          className="px-6 py-3 rounded-lg bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shrink-0"
        >
          Browse
        </button>
      </div>

      <AssetSelectionList items={selectedAssets} onRemove={onRemoveAsset} />
    </div>
  );
}