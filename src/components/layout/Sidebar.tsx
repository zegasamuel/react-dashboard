import React, { FC, ReactNode } from 'react'

const Sidebar: React.FC<{
    children: ReactNode
}> = ({ children }) => {
    return <div className='layout_sidebar'>{children}</div>
}
export default Sidebar
