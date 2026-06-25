import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileBlock from './MobileBlock'

export default function Layout() {
  return (
    <MobileBlock>
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
    </MobileBlock>
  )
}