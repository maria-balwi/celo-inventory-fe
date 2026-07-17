import { useState } from "react"
import PageHeader from "../components/PageHeader"
import DataTable from "../components/DataTable"
import FilterBar from "../components/FilterBar"
import StatusBadge from "../components/StatusBadge"
import EmployeeIdentityCard from "../components/EmployeeIdentityCard"
import SearchSelectAssetCard from "../components/SearchSelectAssetCard"

const ASSETS = [
	{ date: "2023-11-15", category: "Monitor", assetType: "External Monitor 2\"", assetID: "BPO-MON-001", status: "Active" },
	{ date: "2023-11-03", category: "Keyboard", assetType: "A4Tech Keyboard", assetID: "BPO-KEY-001", status: "Active" },
	{ date: "2023-10-30", category: "Mouse", assetType: "A4Tech Mouse", assetID: "BPO-MOU-001", status: "Returned" },
	{ date: "2023-10-30", category: "Keyboard", assetType: "A4Tech Keyboard", assetID: "BPO-KEY-003", status: "Active" },
];

const assetColumns = [
	{ key: "date", label: "Date" },
	{ key: "category", label: "Item Category" },
	{ key: "assetType", label: "Asset Type" },
	{ key: "assetID", label: "Asset ID" },
	{ key: "status", label: "Status", render: (val) => <StatusBadge status={val} /> },
	{ key: "actions", label: "Actions", render: (_, row) => (
			<button
				onClick={() => console.log("view history", row.id)}
				className="font-semibold text-slate-800 hover:underline"
			>
				View History
			</button>
		)
	},
];

export default function EquipmentAssignment() {
	const [category, setCategory] = useState("All Categories");
	const [status, setStatus] = useState("All Statuses");

	const filteredAssets = ASSETS.filter((row) =>
		(category === "All Categories" || row.category === category) &&
		(status === "All Statuses" || row.status === status)
	);

	const [search, setSearch] = useState("000-123");
	const [selectedEmployee, setSelectedEmployee] = useState({
		fullName: "Maria Patrice Reyes",
		employeeID: "000-890",
		department: "IT",
		role: "Web Developer"
	})

	const [assetSearch, setAssetSearch] = useState("");
	const [selectedAssets, setSelectedAssets] = useState([
		{ id: 1, type: "monitor", name: 'External Monitor', serial: "BPO-MON-023" },
		{ id: 2, type: "keyboard", name: 'A4Tech Keyboard', serial: "BPO-KEY-123" },
		{ id: 3, type: "mouse", name: 'A4Tech Mouse', serial: "BPO-MOU-223" },
	]);

	return (
		<>
			<div className="flex flex-col gap-4">
				<PageHeader 
					title="Equipment Assignment"
					subtitle="Manage employee assignments and asset handovers across global centers."
					primaryActions={[
						{ label: "Abort Process", icon: "cancel", variant: "outline", onClick: () => {} },
						{ label: "Save Progress", icon: "save", onClick: () => {} },
					]}
				/>

				<div className="flex gap-4 w-full">
					<div className="flex flex-col gap-3 bg-[#FFF] border border-[#E0E2E5] rounded-lg p-5 flex-1">
						{/* Section Title */}
						<div className="flex items-center gap-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-1-square-fill" viewBox="0 0 20 20">
								<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z"/>
							</svg>
							<h2 className="text-xl font-bold text-slate-800 mb-2">Identify Employee</h2>
						</div>
						<EmployeeIdentityCard 
							search={search}
							onSearchChange={setSearch}
							employee={selectedEmployee}
						/>
					</div>
					<div className="flex flex-col gap-3 bg-[#FFF] border border-[#E0E2E5] rounded-lg p-5 flex-2">
						{/* Section Title */}
						<div className="flex items-center gap-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-2-square-fill" viewBox="0 0 20 20">
								<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm4.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306"/>
							</svg>
							<h2 className="text-xl font-bold text-slate-800 mb-2">Select Asset / Equipment</h2>
						</div>
						<SearchSelectAssetCard
							showHeader={false}
							value={assetSearch}
							onChange={setAssetSearch}
							onBrowse={() => console.log("open browse modal")}
							selectedAssets={selectedAssets}
							onRemoveAsset={(id) => setSelectedAssets((prev) => prev.filter((a) => a.id !== id))}
						/>
					</div>
				</div>

				<DataTable
					columns={assetColumns}
					data={filteredAssets}
					itemLabel="assets"
					pageSize={5}
					toolbar={
						<div className="flex items-center justify-between px-4 py-4 border border-slate-200 bg-slate-50">
							<h2 className="text-lg font-semibold text-slate-700">
								Employee Assignment History
							</h2>
							<button className="text-sm font-semibold text-slate-400 hover:text-slate-600 transition-colors">
								View All Assignment History
							</button>
						</div>
					}
				/>
			</div>
		</>
	)
}