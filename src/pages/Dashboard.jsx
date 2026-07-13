import React from "react"
import StatCard from "../components/StatCard"
import PageHeader from "../components/PageHeader"
import FleetHealthChart from "../components/FleetHealthChart"
import AssetAllocationChart from "../components/AssetAllocationChart"

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