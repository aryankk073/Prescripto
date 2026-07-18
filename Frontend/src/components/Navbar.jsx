import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/doctors', label: 'ALL DOCTORS' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' }
  ]

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400'>

      <img
        className='w-44 cursor-pointer'
        src={assets.logo}
        alt='Logo'
      />

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
                    className={`h-0.5 w-3/5 rounded-full bg-primary transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </>
              )}

            </NavLink>

          </li>

        ))}

      </ul>

      <button className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>
        Create Account
      </button>

    </div>
  )
}

export default Navbar