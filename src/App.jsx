// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Layout from './components/Layout'

// function Dashboard() {
//   return (
//     <div className="flex flex-col items-center justify-center h-[60vh] gap-3 text-slate-500">
//       <h1 className="text-xl text-slate-400 font-medium">Dashboard</h1>
//       <p className="text-sm">Coming soon - Phase 2</p>
//     </div>
//   );
// }

// function AssetInventory() {
//   return (
//     <div className="flex flex-col items-center justify-center h-[60vh] gap-3 text-slate-500">
//       <h1 className="text-xl text-slate-400 font-medium">Asset Inventory</h1>
//       <p className="text-sm">Build this next time  - see Phase 2 of your roadmap</p>
//     </div>
//   );
// }

// function PersonnelPortal() {
//   return (
//     <div className="flex flex-col items-center justify-center h-[60vh] gap-3 text-slate-500">
//       <h1 className="text-xl text-slate-400 font-medium">Personnel Portal</h1>
//       <p className="text-sm">Coming soon - Phase 4</p>
//     </div>
//   );
// }

// function Reports() {
//   return (
//     <div className="flex flex-col items-center justify-center h-[60vh] gap-3 text-slate-500">
//       <h1 className="text-xl text-slate-400 font-medium">Reports & Analytics</h1>
//       <p className="text-sm">Coming soon - Phase 5</p>
//     </div>
//   );
// }

// function AuditLogs() {
//   return (
//     <div className="flex flex-col items-center justify-center h-[60vh] gap-3 text-slate-500">
//       <h1 className="text-xl text-slate-400 font-medium">Audit Logs</h1>
//       <p className="text-sm">Coming soon</p>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Dashboard />} />
//           <Route path="inventory" element={<AssetInventory />} />
//           <Route path="personnel" element={<PersonnelPortal />} />
//           <Route path="reports" element={<Reports />} />
//           <Route path="audit" element={<AuditLogs />} />
//           <Route path="*" element={<NotFound />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter } from 'react-router-dom'
import Router from './Router'

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}