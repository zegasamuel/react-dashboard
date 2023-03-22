import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'

function Navbar() {
    return (
        <div className="sidenav_container">
            <h2 className="text-center">Dashboard</h2>
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
        title: 'Chart',
        path: '/dashboard/chart',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',
    },
    {
        title: 'LoginSidebar',
        path: '/dashboard/login',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text',
    },
    {
        title: 'Auth',
        path: '/auth',
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
