import {
    TopBar,
    RightSidebarLayout,
    LineChart,
    IconArrowDropup,
    IconThreeDots,
    IconSsidChart,
    IconMasterCard,
    BarChart,
    RadialChart,
    IconShop,
} from '../components'
import {
    barChartDataDailyTraffic,
    barChartOptionsDailyTraffic,
    lineChartDataProjectStatus,
    lineChartDataTotalSpent,
    lineChartOptionsProjectStatus,
    lineChartOptionsTotalSpent,
    radialChartData,
    radialChartOption,
} from '../variables/charts'
import { transactionHistory } from '../variables/transaction'

export default function Home() {
    return (
        <div className="overflow-auto home-container">
            <TopBar />
            <RightSidebarLayout>
                <div className="mt-100">
                    <div className="container-card-2to1">
                        <DoubleLineChart />
                        <CreditBalanceCard />
                    </div>
                    <div className="container-card-3row">
                        <DailyTraffic />
                        <ProjectStatus />
                        <ProfitEstimation />
                    </div>
                    <div className="container-card-1to2">
                        <DoubleLineChart />
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
                        <CardCollection />
                        <TransactionHistory />
                    </div>
                </div>
            </RightSidebarLayout>
        </div>
    )
}

export const DailyTraffic = () => {
    return (
        <div className="card-bg p-16">
            <div className="d-flex justify-space-between">
                <div>
                    <p className="m-0 fs-xs fw-200 color-grey">Daily Traffic</p>
                    <p className="m-0 fs-xl fw-500">
                        2.579{' '}
                        <span className="m-0 fs-xs fw-200 color-grey">
                            Visitors
                        </span>
                    </p>
                </div>
                <div className="d-flex">
                    <IconArrowDropup className="mt-2 icon-green" />
                    <p className="m-0  color-green">+2.45%</p>
                </div>
            </div>
            <div className="home-line-chart mt-50">
                <BarChart
                    chartData={barChartDataDailyTraffic}
                    chartOptions={barChartOptionsDailyTraffic}
                />
            </div>
        </div>
    )
}

export const DoubleLineChart = () => {
    return (
        <div className="card-bg pv-16 ph-32">
            <div className="d-flex justify-space-between align-center">
                <div className="d-flex align-center">
                    <div>
                        <h1 className="m-0 fw-500">$37.5K</h1>
                        <p className="m-0 fs-sm color-grey">Overall Revenue</p>
                    </div>
                    <div className="ml-24 d-flex align-center">
                        <IconArrowDropup className="mt-2 icon-green" />
                        <p className="ml-2 color-green">+2.45%</p>
                    </div>
                </div>
                <p className="color-grey">Monthly</p>
            </div>
            <div className="home-line-chart">
                <LineChart
                    chartData={lineChartDataTotalSpent}
                    chartOptions={lineChartOptionsTotalSpent}
                />
            </div>
        </div>
    )
}

const ProjectStatus = () => {
    return (
        <div className="card-bg p-16">
            <div className="d-flex justify-space-between align-center">
                <p className="m-0 fs-lg fw-500">Project Status</p>
                <div className="icon-bg-gray icon-box">
                    <IconThreeDots className="icon-blue-active icon-xs" />
                </div>
            </div>
            <div className="d-flex justify-space-between align-center mt-16">
                <div className="d-flex align-center">
                    <div className="icon-bg-gray icon-bg-circle mr-8">
                        <IconShop className="icon-blue-active icon-xs" />
                    </div>
                    <div>
                        <p className="m-0 fs-lg fw-500">eCommerce</p>
                        <p className="m-0 fs-xs fw-200 color-grey">UI Design</p>
                    </div>
                </div>
                <p className="m-0 fs-lg fw-700">71%</p>
            </div>

            <div className="home-line-chart">
                <LineChart
                    chartData={lineChartDataProjectStatus}
                    chartOptions={lineChartOptionsProjectStatus}
                />
            </div>
        </div>
    )
}

const ProfitEstimation = () => {
    return (
        <div className="card-bg pv-16 ph-32">
            <p className="m-0 fs-lg fw-500 text-center">Profit Estimation</p>
            <p className="fs-xs color-grey text-center p-16">
                Discover your profit, and learn more about your business
            </p>
            <div className="home-radial-chart">
                <RadialChart
                    chartData={radialChartData}
                    chartOptions={radialChartOption}
                />
            </div>
            <div className="d-flex justify-space-between align-center card-bg pv-8 ph-16">
                <div className='text-center'>
                    <p className='fs-xs color-grey'>Est. Sales</p>
                    <p className='fw-500'>1540</p>
                </div>
                <div>
                    <p className='fs-xs color-grey'>Est. Profit</p>
                    <p className='fw-500'>$3.984</p>
                </div>
            </div>
        </div>
    )
}

export const CreditBalanceCard = () => {
    return (
        <div className="card-bg p-16">
            <div className="card-bg-blue-gradient p-24">
                <div className="d-flex justify-space-between align-center">
                    <p className="fs-sm mv-0">Credit Balance</p>
                    <IconThreeDots className="mt-2 icon-white" />
                </div>
                <div className="d-flex justify-space-between align-center">
                    <p className="fs-xxl fw-500 mv-0">$3942.58</p>
                    <IconSsidChart className="mt-2 icon-white icon-xl" />
                </div>
            </div>
            <p className="fs-sm fw-100 mv-16 color-grey mv-12">Recent</p>
            {transactionHistory.slice(0, 3).map((item, index) => (
                <div
                    key={index}
                    className="d-flex justify-space-between align-center mb-16"
                >
                    <div className="d-flex align-center">
                        <div className="icon-bg-circle icon-bg-gray">
                            {item.icon}
                        </div>
                        <div className="ml-16">
                            <p className="fs-md fw-500 mv-0">{item.title}</p>
                            <p className="fs-sm color-grey mv-0">{item.date}</p>
                        </div>
                    </div>
                    <p className="fs-sm fw-500">{item.amount}</p>
                </div>
            ))}
        </div>
    )
}

const CardCollection = () => {
    return (
        <div>
            <h4 className="mt-2 mb-16">Your Card</h4>
            <div className="card-debit">
                <div className="d-flex justify-space-between align-center">
                    <h1 className="color-gold fs-xxl mv-16">Gold</h1>
                    <IconMasterCard className="icon-white icon-xxl opacity-8" />
                </div>
                <p className="fs-lg mv-16">7812 XXXX XXXX XXXX</p>
                <div className="d-flex mt-32 mb-8">
                    <div className="mr-32">
                        <p className="fs-xxs fw-200 mb-2">VALID THRU</p>
                        <p className="mt-2 fs-md fw-500">05/24</p>
                    </div>
                    <div>
                        <p className="fs-xxs fw-200 mb-2">CVV</p>
                        <p className="mt-2 fs-md fw-500">09X</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TransactionHistory = () => {
    return (
        <div>
            <h2 className="mv-16">Your transactions</h2>
            {transactionHistory.map((item, index) => (
                <div
                    key={index}
                    className="d-flex justify-space-between align-center mb-24"
                >
                    <div className="d-flex align-center">
                        <div className="icon-bg-circle icon-bg-gray">
                            {item.icon}
                        </div>
                        <div className="ml-16">
                            <p className="fs-md fw-500 mv-0">{item.title}</p>
                            <p className="fs-sm color-grey mv-0">{item.date}</p>
                        </div>
                    </div>
                    <p className="fs-sm fw-500">{item.amount}</p>
                </div>
            ))}
        </div>
    )
}
