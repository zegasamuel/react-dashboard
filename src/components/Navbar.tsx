import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    return (
        <div className="sidenav_container">
            <h1 className="align-center">Dashboard</h1>
            <IconContext.Provider value={{ color: '#413EFB' }}>
              <div className='nav_menu'>
                {sidebarData.map((item, key) => (
                    <Link className='nav_menu_item' key={key} to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                ))}
              </div>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar

const sidebarData = [
    {
        title: 'Home',
        path: '/dashboard',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text',
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text',
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text',
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text',
    },
]
