import React from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarLayout } from '../components'
import Navbar from '../components/Navbar'

export default function Dashboard() {
    return (
        <SidebarLayout>
            <Navbar />
            <Outlet />
        </SidebarLayout>
    )
}
