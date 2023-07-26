import './index.scss'
import SideBar from '../SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <SideBar /> 
    </div>
  )
}

export default Layout