import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Links from './pages/Links'

export default function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/links" element={<Links/>} />
            </Routes>
        </BrowserRouter>
    )
}