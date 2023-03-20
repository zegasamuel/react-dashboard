import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard, Login } from './views'
import './styles/style.scss'
import Charting from './views/Charting'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="dashboard" element={<Dashboard />}>
                    <Route path="" element={<Login />} />
                    <Route path="chart" element={<Charting />} />
                </Route>
                <Route path="auth" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
