import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const navigate = useNavigate()

  const { token, setToken ,userData } = useContext(AppContext)

  const [showMenu, setShowMenu] = useState(false)

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/doctors', label: 'ALL DOCTORS' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' }
  ]

  const logout = () => {
    setToken(false)
    localStorage.removeItem('token')
  }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400'>
      {/* Logo */}
      <img
        className='w-44 cursor-pointer'
        src={assets.logo}
        alt='Logo'
      />

      {/* Navigation Links */}
      <ul className='hidden md:flex items-center gap-5 font-medium'>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.path === '/'}
              className='flex flex-col items-center gap-1'
            >
              {({ isActive }) => (
                <>
                  <p className='py-1'>{item.label}</p>

                  <div
                    className={`h-0.5 w-3/5 rounded-full bg-primary transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                  />
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right Section */}
      <div className='flex items-center gap-4'>
        {
          token && userData
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img onClick={() => navigate('/')} className='w-8 rounded-full' src={userData.image} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={logout} className='hover:text-black cursor-pointer'>
                    Logout
                  </p>
                </div>
              </div>
            </div>
            : <button
              onClick={() => navigate('/login')}
              className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'
            >
              Create Account
            </button>
        }

      </div>
    </div>
  )
}

export default Navbar