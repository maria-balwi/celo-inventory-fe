import React from "react"
import StatCard from "../components/StatCard"
import StatusBadge from "../components/StatusBadge"
import DataTable from "../components/DataTable"
import PageHeader from "../components/PageHeader"
import FleetHealthChart from "../components/FleetHealthChart"
import AssetAllocationChart from "../components/AssetAllocationChart"

const filteredAssets = [
  { id: "AST-99201", category: "Laptop",  model: "Precision 5570 i9",  serial: "CN-8GHF2-724", assignee: "Jane Doe",      status: "In Use"    },
  { id: "AST-88432", category: "Headset", model: "Poly Blackwire 5220", serial: "SN-POLY-8822", assignee: null,            status: "Available" },
  { id: "AST-77110", category: "Laptop",  model: 'MacBook Pro 14" M2', serial: "C02G99XL0850", assignee: "Michael Smith", status: "Repair"    },
  { id: "AST-44109", category: "Chair",   model: "Herman Miller Aeron", serial: "HM-A-898871",  assignee: "Alice Rivera",  status: "In Use"    },
  { id: "AST-22341", category: "Laptop",  model: "ThinkPad X1 Carbon",  serial: "PF-2G9B-X1C",  assignee: null,            status: "Available" },
];

const columns = [
  { key: "id",       label: "Asset ID" },
  { key: "category", label: "Item Category" },
  { key: "model",    label: "Model" },
  { key: "serial",   label: "Serial Number" },
  { key: "assignee", label: "Assignee" },
  { key: "status",   label: "Status",  render: (val) => <StatusBadge status={val} /> },
  { key: "actions",  label: "Actions", render: (_, row) => (
    <button
      onClick={() => console.log("view", row.id)}
      className="text-xs font-semibold text-slate-700 hover:text-slate-900"
    >
      View History
    </button>
  )},
];

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <PageHeader 
          title="Dashboard" 
          subtitle="Strategic inventory overview and critical compliance tracking."
          actions={[
            { label: "Audit Mode", variant: "outline", onClick: () => {} },
            { label: "Quick Report", variant: "solid", onClick: () => {} },
          ]}
        />

        <div className="grid grid-cols-4 gap-6 overflow-hidden mb-3">
            <StatCard label="Total Assets" value="12,482" sub="+12% vs last month" />
            <StatCard label="Available" value="3,104" sub="―――" />
            <StatCard label="In Repair" value="89" sub="Critical escalation: 4" highlight />
            <StatCard label="Compliance Score" value="98.4%" sub="Audit: 14 days ago" />
        </div>

        <div className="flex items-stretch gap-4">
          <div className="flex-1 min-w-0">
            {/* <DataTable 
              columns={columns} 
              data={filteredAssets} 
              emptyMessage="No assets match your filters."
              categories={["All Categories", "In Use", "Available", "Repair"]}
              statuses={["All Statuses", "In Use", "Available", "Repair"]}
              pageSize={5}
              totalItems={12482}
            /> */}
            <AssetAllocationChart />
          </div>
          <div className="w-[300px] shirnk-0">
            <FleetHealthChart />
          </div>
        </div>
      </div>

    </>
  );
}