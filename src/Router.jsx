import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AssetInventory from './pages/AssetInventory'
import PersonnelPortal from './pages/PersonnelPortal'
import Reports from './pages/Reports'
import AuditLogs from './pages/AuditLogs'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'

export default function Router() {
	return (
		<div className="flex flex-col min-h-screen">
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Dashboard />}></Route>
					<Route path='/inventory' element={<AssetInventory />}></Route>
					<Route path='/personnel' element={<PersonnelPortal />}></Route>
					<Route path='/reports' element={<Reports />}></Route>
					<Route path='/audit' element={<AuditLogs />}></Route>
				</Route>
				<Route path='/*' element={<NotFound />}></Route>
			</Routes>
		</div>
	);
}