
import { Outlet } from 'react-router-dom'
import SideNav from '../components/navigations/side/SideNav'

const MainLayout = () => {
  return (
    <>
     <SideNav/>
    <Outlet/>
   
    </>
    
  )
}

export default MainLayout