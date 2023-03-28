import { Link } from 'react-router-dom'
import {
    IconHome,
    IconIosPaper,
    IconCart,
    IconPeople,
    IconMessage,
    IconHelpCircle,
    IconArrowDown,
} from '../components'

function Navbar() {
    return (
        <div className="sidenav-container">
            <h2 className="text-center">Dashboard</h2>
            <div className="nav-menu mt-32">
                {sidebarData.map((item, key) => (
                    <li className="nav-menu-item mh-24 mv-16" id={`${item.title}`}>
                        <a
                            className="nav-menu-item-btn d-flex justify-space-between align-center"
                            href={`#${item.title}`}
                        >
                            <div className="d-flex align-center">
                                {item.icon}{' '}
                                <p className="fs-md">{item.title}</p>
                            </div>
                            <IconArrowDown className="icon-grey" />
                        </a>
                        <div className="ml-40 nav-menu-item-submenu">
                            {sidebarData.map((item, key) => (
                                <Link
                                    className="nav_menu_item color-grey mv-4"
                                    key={key}
                                    to={item.path}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default Navbar

const sidebarData = [
    {
        title: 'Home',
        path: '/dashboard',
        icon: <IconHome className="icon-blue-active mr-16 mb-2 icon-sm" />,
        cName: 'nav-text',
    },
    {
        title: 'Chart',
        path: '/dashboard/chart',
        icon: <IconIosPaper className="icon-blue-active mr-16 mb-2 icon-sm" />,
        cName: 'nav-text',
    },
    {
        title: 'LoginSidebar',
        path: '/dashboard/login',
        icon: <IconCart className="icon-blue-active mr-16 mb-2 icon-sm" />,
        cName: 'nav-text',
    },
    {
        title: 'Auth',
        path: '/auth',
        icon: <IconPeople className="icon-blue-active mr-16 mb-2 icon-sm" />,
        cName: 'nav-text',
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <IconMessage className="icon-blue-active mr-16 mb-2 icon-sm" />,
        cName: 'nav-text',
    },
    {
        title: 'Support',
        path: '/support',
        icon: (
            <IconHelpCircle className="icon-blue-active mr-16 mb-2 icon-sm" />
        ),
        cName: 'nav-text',
    },
]
