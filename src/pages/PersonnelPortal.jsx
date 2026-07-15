import React, { useState } from "react"
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import DataTable from "../components/DataTable";
import PersonnelFilterBar from "../components/PersonnelFilterBar";
import PendingCard from "../components/PendingCard"
import StatusBadge from "../components/StatusBadge";
import { label } from "framer-motion/client";

const EMPLOYEES = [
  { eid: "000-101", name: "Alexandrea Mercado", department: "Operations", assetCount: 3, assetList: "Laptop, Phone, Token", status: "Active" },
  { eid: "000-102", name: "Julian Garcia", department: "IT", assetCount: 5, assetList: "Workstation, Monitor x2, +2", status: "Active" },
  { eid: "000-103", name: "Samantha Santos", department: "Recruitment", assetCount: 2, assetList: "", status: "On Leave" },
  { eid: "000-104", name: "Victor Mendez", department: "Human Resources", assetCount: 1, assetList: "", status: "Active" },
  { eid: "000-105", name: "Ginny Perez", department: "Operations", assetCount: 3, assetList: "Laptop, Phone, Token",  status: "Active" },
  { eid: "000-106", name: "Julie Ann Raterta", department: "IT", assetCount: 5, assetList: "Workstation, Monitor x2, +2", status: "Active" },
  { eid: "000-107", name: "Manuel Suarez", department: "Recruitment", assetCount: 2, assetList: "", status: "On Leave" },
  { eid: "000-108", name: "Gabriella Mercado", department: "Human Resources", assetCount: 1, assetList: "", status: "Active" },
  { eid: "000-109", name: "Mari Cruz", department: "Operations", assetCount: 3, assetList: "Laptop, Phone, Token",  status: "Active" },
  { eid: "000-110", name: "Jamie Alvarez", department: "IT", assetCount: 5, assetList: "Workstation, Monitor x2, +2", status: "Active" },
  { eid: "000-111", name: "Samantha Santos", department: "Recruitment", assetCount: 2, assetList: "", status: "On Leave" },
  { eid: "000-112", name: "Victor Mendez", department: "Human Resources", assetCount: 1, assetList: "", status: "Active" },
  { eid: "000-113", name: "Alexandrea Mercado", department: "Operations", assetCount: 3, assetList: "Laptop, Phone, Token",  status: "Active" },
  { eid: "000-114", name: "Julian Garcia", department: "IT", assetCount: 5, assetList: "Workstation, Monitor x2, +2", status: "Active" },
  { eid: "000-116", name: "Samantha Santos", department: "Recruitment", assetCount: 2, assetList: "", status: "On Leave" },
  { eid: "000-117", name: "Victor Mendez", department: "Human Resources", assetCount: 1, assetList: "", status: "Active" },
  { eid: "000-118", name: "Alexandrea Mercado", department: "Operations", assetCount: 3, assetList: "Laptop, Phone, Token",  status: "Active" },
  { eid: "000-119", name: "Julian Garcia", department: "IT", assetCount: 5, assetList: "Workstation, Monitor x2, +2", status: "Active" },
  { eid: "000-120", name: "Samantha Santos", department: "Recruitment", assetCount: 2, assetList: "", status: "On Leave" },
];

const employeeColumns = [
	{
		key: "name",
		label: "Employee Name & ID", 
		render: (_, row) => (
			<div>
				<p className="font-semibold text-slate-800">{row.name}</p>
				<p className="text-xs text-slate-400 mt-0.5">{row.eid}</p>
			</div>
		),
	}, 
	{ key: "department", label: "Department" },
	{
		key: "assetCount",
		label: "Active Assets",
		render: (val, row) => (
			<span>
				<span className="font-semibold text-slate-800">{val}</span>
				{row.assetList && <span className="text-slate-400 text-sm ml-1">({row.assetList})</span>}
			</span>
		),
	},
	{ key: "status", label: "Status", render: (val) => <StatusBadge status={val} /> },
	{
		key: "actions",
		label: "Actions",
		render: (_, row) => (
			<button 
				onClick={() => console.log("manage", row.eid)}
				className="font-semibold text-slate-800 hover:underline"
			>
				Manage
			</button>
		),
	},
];

export default function PersonnelPortal() {
	const [search, setSearch] = useState("")
	const [department, setDepartment] = useState("All Departments")

	const filteredEmployees = EMPLOYEES.filter((row) => {
		const matchesDept = department === "All Departments" || row.department === department;
		const q = search.toLowerCase();
		const matchesSearch = search === "" ||
			row.name.toLowerCase().includes(q) ||
			row.eid.toLowerCase().includes(q);
		return matchesDept && matchesSearch;
	})
	return (
		<>
			<div className="flex flex-col gap-4">
				<PageHeader 
					title="Personnel Portal"
					subtitle="Manage employee assignments and asset handovers."
					actions={[
						{ label: "Audit Mode", variant: "outline", onClick: () => {} },
            { label: "Quick Report", variant: "solid", onClick: () => {} },
					]}
					primaryAction={{
						label: "New Equipment Assignment",
						onClick: () => console.log("Open new assignment")
					}}
				/>

				<div className="grid grid-cols-4 gap-6 overflow-hidden mb-3">
					<StatCard label="Total Employees" value="315" />
					<StatCard label="Active Assignments" value="287" />
					<StatCard label="Pending Handovers" value="21" sub="Urgent" />
					<StatCard label="Compliance Rate" value="99.2%" sub="Target 100%" />
				</div>

				<DataTable
					columns={employeeColumns}
					data={filteredEmployees}
					itemLabel="employees"
					pageSize={12}
					rowKey="eid"
					toolbar={
						<PersonnelFilterBar
							search={search}
							onSearchChange={setSearch}
							departments={["All Departments", "Operations", "Recruitment", "Business Development", "IT", "Human Resources"]}
							department={department}
							onDepartmentChange={setDepartment}
							onMoreFilters={() => console.log("open more filters")}
						/>
					}
				/>

				<div className="flex gap-4 w-full">
					<div className="flex flex-col gap-3 bg-[#FFF] border border-[#E0E2E5] rounded-lg p-5 flex-2">
						{/* Section Title */}
						<div className="flex items-center justify-between">
							<h2 className="text-xl font-bold text-slate-800 mb-2">Pending Equipment Assignemnt</h2>
							<button className="text-sm font-semibold text-slate-400 hover:text-slate-600 transition-colors">
								View All Task Queue
							</button>
						</div>
						<PendingCard 
							icon="transfer"
							title="Macbook Pro M2 Transfer"
							subtitle="Recipient:"
							subtitleBold="Jamie Alvarez"
							subtitleExtra="- From AO1 (Panay)"
							due="DUE TODAY"
							dueUrgent={true}
							actionLabel="EXECUTE"
							actionSolid={true}
							onAction={() => console.log("Execute")}
						/>

						<PendingCard 
							icon="key"
							title="Security Token Revocation"
							subtitle="Subject:"
							subtitleBold="Samantha Santos"
							subtitleExtra="- From AO2 (Panay)"
							due="DUE IN 2 DAYS"
							dueUrgent={false}
							actionLabel="PREPARE"
							actionSolid={false}
							onAction={() => console.log("Prepare")}
						/>
					</div>
					<div className="flex flex-col gap-3 bg-[#FFF] border border-[#E0E2E5] rounded-lg p-5 flex-1">
						<PendingCard 
							icon="transfer"
							title="Macbook Pro M2 Transfer"
							subtitle="Recipient:"
							subtitleBold="Jamie Alvarez"
							subtitleExtra="- From AO1 (Panay)"
							due="DUE TODAY"
							dueUrgent={true}
							actionLabel="EXECUTE"
							actionSolid={true}
							onAction={() => console.log("Execute")}
						/>

						<PendingCard 
							icon="key"
							title="Security Token Revocation"
							subtitle="Subject:"
							subtitleBold="Samantha Santos"
							subtitleExtra="- From AO2 (Panay)"
							due="DUE IN 2 DAYS"
							dueUrgent={false}
							actionLabel="PREPARE"
							actionSolid={false}
							onAction={() => console.log("Prepare")}
						/>
					</div>
				</div>
			</div>
		</>
	);
}