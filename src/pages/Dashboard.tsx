import React from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarLayout, Navbar } from '../components'

export default function Dashboard() {
    return (
        <SidebarLayout>
            <Navbar />
            <Outlet />
        </SidebarLayout>
    )
}
