import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../firebase/auth'
import { FaBars, FaUserCircle } from 'react-icons/fa'


/**
 * Navbar for the dashboard, contains the sidebar toggle and user profile
 *
 * @param {*} {sidebarToggle, setSidebarToggle}
 * @return {*} 
 */
const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        <nav className='bg-gray-800 px-4 py-3 flex justify-between'>
            <div className='flex items-center text-xl'>
                <FaBars className='text-white me-4 cursor-pointer'
                    onClick={() => setSidebarToggle(!sidebarToggle)} />
                <span className='text-white font-semibold'>My Dashboard</span>
            </div>
            <div className='flex items-center gap-x-5'>
                <div className="relative">
                    <button className="text-white group">
                        <FaUserCircle className='w-6 h-6 mt-1' />
                        {
                            userLoggedIn
                                ?
                                <>
                                    <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-sm text-white-600'>Logout</button>
                                </>
                                :
                                <>
                                    <Link className='text-sm text-blue-600 underline' to={'/login'}>Login</Link>
                                    <Link className='text-sm text-blue-600 underline' to={'/register'}>Register New Account</Link>
                                </>
                        }
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar