import { IoMdArrowDropup } from 'react-icons/io'
import { IconContext } from 'react-icons'
import { TopBar } from '../components'
import { RightSidebarLayout, LineChart } from '../components'
import {
    lineChartDataTotalSpent,
    lineChartOptionsTotalSpent,
} from '../variables/charts'

export default function Home() {
    return (
        <div className="overflow-auto ">
            <TopBar />
            <RightSidebarLayout>
                <div className="mt-100">
                    <div className="container-card-2to1">
                        <DoubleLineChart />
                        <div className="card-bg pv-16 ph-32"></div>
                    </div>
                    <div className="container-card-3row">
                        <div className="card-bg pv-16 ph-32">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Minus, nulla! Eum ipsam, alias
                                esse vitae sint fuga hic delectus placeat omnis
                                labore laudantium nam, dolor nulla sapiente
                                molestiae qui dicta?
                            </p>
                        </div>
                        <div className="card-bg pv-16 ph-32"></div>
                        <div className="card-bg pv-16 ph-32"></div>
                    </div>
                    <div className="container-card-1to2">
                        <div className="card-bg pv-16 ph-32"></div>
                        <div className="card-bg pv-16 ph-32">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Minus, nulla! Eum ipsam, alias
                                esse vitae sint fuga hic delectus placeat omnis
                                labore laudantium nam, dolor nulla sapiente
                                molestiae qui dicta?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-100">
                    <div className="card-right-side">
                        <h3>Your Card</h3>
                    </div>
                </div>
            </RightSidebarLayout>
        </div>
    )
}

const DoubleLineChart = () => {
    return (
        <div className="card-bg pv-16 ph-32">
            <div className="d-flex justify-space-between align-center">
                <div className="d-flex align-center">
                    <div>
                        <h1 className="m-0 fw-500">$37.5K</h1>
                        <p className="m-0 fs-sm color-grey">Overall Revenue</p>
                    </div>
                    <div className="ml-24 d-flex align-center">
                        <IconContext.Provider value={{ color: '#00B574' }}>
                            <IoMdArrowDropup className="mt-2" />
                        </IconContext.Provider>
                        <p className="ml-2 color-green">+2.45%</p>
                    </div>
                </div>
                <p className="color-grey">Monthly</p>
            </div>
            <div className='home-line-chart'>
                <LineChart
                    chartData={lineChartDataTotalSpent}
                    chartOptions={lineChartOptionsTotalSpent}
                />
            </div>
        </div>
    )
}
