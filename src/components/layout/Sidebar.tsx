import React, { ReactNode } from 'react'

const Sidebar: React.FC<{
    children: ReactNode
}> = ({ children }) => {
    return <div className='layout-sidebar'>{children}</div>
}
export default Sidebar
