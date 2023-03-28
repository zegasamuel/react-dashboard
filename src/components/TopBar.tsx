import {
    IconMoon,
    IconOutlineBell,
    IconOutlineInfoCircle,
    IconSearch,
} from '../components'

export default function TopBar() {
    return (
        <div className="topbar-container">
            <h1 className="m-0 fw-600">Main Dashboard</h1>
            <div className="right-side">
                <div className="d-flex align-center input-box topbar-input">
                    <IconSearch className="icon-black mr-8" strokeWidth={1} />
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="left-side">
                    <IconOutlineBell className="clickable icon-grey icon-sm" />
                    <IconOutlineInfoCircle className="clickable icon-grey icon-sm" />
                    <IconMoon className="clickable icon-grey icon-sm" />
                    <p className="circle-text-background">AP</p>
                </div>
            </div>
        </div>
    )
}
