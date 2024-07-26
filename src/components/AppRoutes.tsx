import {Routes, Route} from 'react-router-dom'
import SidebarContent from './sidebar/SidebarContent'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/sidebar" element={<SidebarContent/>}/>
        </Routes>
    )
}