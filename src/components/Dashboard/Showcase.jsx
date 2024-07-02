import React,{useState} from 'react'
import Sidebar from './Sidebar'
import Dashboard from './dashboard'
import DashNewsFeed from '../apis/newfeed'

/**
 * Showcase for the dashboard
 *
 * @return {*} 
 */

const Showcase = () => {
    const [sidebarToggle, setSidebarToggle] = useState(true)
  return (
    <div className='flex'>
        <Sidebar sidebarToggle={sidebarToggle} />
        <Dashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>

    </div>
  )
}

export default Showcase