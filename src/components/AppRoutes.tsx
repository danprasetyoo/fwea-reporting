import {Routes, Route} from 'react-router-dom'
import SidebarContent from './sidebar/SidebarContent'
import FormInput from './calculator/FormInput'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/sidebar" element={<SidebarContent/>}/>
            <Route path="/input" element={<FormInput/>}/>
        </Routes>
    )
}