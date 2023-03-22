import React, { ReactNode } from 'react'

const RightSidebar: React.FC<{
    children: ReactNode
}> = ({ children }) => {
    return <div className='layout-right-sidebar'>{children}</div>
}
export default RightSidebar
