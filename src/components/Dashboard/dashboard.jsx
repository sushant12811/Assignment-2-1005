import React from 'react'
import DashNewsFeed from '../apis/newfeed'
import DashWeather from '../apis/weather'
import StockData from '../apis/stock'
import UnitConverter from '../unit/unitConverter'
import Navbar from './Navbar'


/**
 *Showcasing 3 components and navbar for the dashboard
 *
 * @param {*} {sidebarToggle, setSidebarToggle}
 * @return {*} 
 */
const Dashboard = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? "" : " ml-64 "} w-full`}>
      <Navbar 
      sidebarToggle={sidebarToggle} 
      setSidebarToggle={setSidebarToggle} />

     <div className="grid grid-cols-1 bg-gray-100 md:grid-cols-3 gap-4 p-4">
        <div className="bg-white shadow rounded-lg p-4 h-auto">
          <DashNewsFeed />
        </div>       
        <div className="bg-white shadow rounded-lg p-4 h-auto">
          <DashWeather />
        </div> 
        <div className="bg-white shadow rounded-lg p-4 h-auto">
          <StockData />
          <UnitConverter/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard