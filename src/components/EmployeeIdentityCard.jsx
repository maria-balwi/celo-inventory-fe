// Usage:
// <EmployeeIdentityCard
//   search={search}
//   onSearchChange={setSearch}
//   employee={{
//     fullName: "Sarah Jenkins",
//     employeeId: "EID-99420",
//     department: "Operations Dept",
//     location: "Manila Hub",
//     role: "Senior Data Analyst",
//     status: "Verified Internal",
//   }}
// />

export default function EmployeeIdentityCard({ search, onSearchChange, employee }) {
	return (
		<>
			<div className="flex flex-col gap-4">
				<div>
					<p className="text-sm font-semibold text-slate-700 mb-1.5">Search Employee ID or Name</p>
					<div className="relative">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0M21 21l-5.197-5.197m0 0A6.75 6.75 0 1 0 6.34 6.34a6.75 6.75 0 0 0 9.463 9.463Z" />
						</svg>
						<input 
							type="text"
							placeholder="000-001"
							value={search}
							onChange={(e) => onSearchChange(e.target.value)}
							className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-[#f0f2f7] border border-slate-200 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition-colors"
						/>
					</div>
				</div>
				
				{employee && (
					<div className="bg-[#f0f2f7] border border-slate-200 rounded-lg p-5 grid grid-cols-2 gap-x-6 gap-y-4">
						<div>
							<p className="text-xs font-bold text-slate-500 uppercase tracking-widest ">Full Name</p>
							<p className="text-lg font-semibold text-slate-800 mt-1 ">{employee.fullName}</p>
						</div>
						<div className="text-right">
							<p className="text-xs font-bold text-slate-500 uppercase tracking-widest ">Employee ID</p>
							<p className="text-lg font-semibold text-slate-800 mt-1 ">{employee.employeeID}</p>
						</div>

						<div>
							<p className="text-xs font-bold text-slate-500 uppercase tracking-widest ">Department</p>
							<p className="text-lg font-normal text-slate-800 mt-1 ">{employee.department}</p>
						</div>
						<div>
							<p className="text-xs font-bold text-slate-500 uppercase tracking-widest ">Role</p>
							<p className="text-lg font-normal text-slate-800 mt-1 ">{employee.role}</p>
						</div>
					</div>
				)}
			</div>
		</>
	)
}