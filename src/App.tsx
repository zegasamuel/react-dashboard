import { BrowserRouter, Route, Routes, Navigate, createBrowserRouter } from 'react-router-dom'
import { Dashboard, Login, Home, Charting } from './pages'
import './styles/style.scss'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="dashboard" element={<Dashboard />}>
                    <Route path="" element={<Home />} />
                    <Route path="chart" element={<Login />} />
                    <Route path="login" element={<Charting />} />
                </Route>
                <Route path="auth" element={<Login />} />
                <Route path="*" element={<Navigate to="dashboard" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

const router = createBrowserRouter([
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "",
          element: <Home />,
          
        },
      ],
    },
  ]);