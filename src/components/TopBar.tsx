import * as AiIcons from 'react-icons/ai'
import * as HiIcons from 'react-icons/hi'
import * as CiIcons from 'react-icons/ci'
import { IconContext } from 'react-icons'

export default function TopBar() {
    return (
        <div className="topbar-container">
            <h1 className="m-0 fw-500">Main Dashboard</h1>
            <div className="right-side">
                <div className="d-flex align-center input-box topbar-input">
                    <IconContext.Provider value={{ color: '#363737' }}>
                        <CiIcons.CiSearch strokeWidth={1} />
                    </IconContext.Provider>
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="left-side">
                    <IconContext.Provider
                        value={{ color: '#A0AEC0', size: '18' }}
                    >
                        <AiIcons.AiOutlineBell className="clickable" />
                        <AiIcons.AiOutlineInfoCircle className="clickable" />
                        <HiIcons.HiMoon className="clickable" />
                    </IconContext.Provider>
                    <p className='circle-text-background'>AP</p>
                </div>
            </div>
        </div>
    )
}
