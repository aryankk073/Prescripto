
import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Login from './pages/login.jsx'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

import AdminDashboard from './pages/Admin/Dashboard'
import AllAppointments from './pages/Admin/AllAppointments'
import AddDoctor from './pages/Admin/AddDoctor'
import DoctorsList from './pages/Admin/DoctorsList'

import DoctorDashboard from './pages/Doctor/DoctorDashboard'
import DoctorAppointments from './pages/Doctor/DoctorAppointments'
import DoctorProfile from './pages/Doctor/DoctorProfile'

import { AdminContext } from './context/AdminContext'
import { DoctorContext } from './context/DoctorContext'

const App = () => {

    const { aToken } = useContext(AdminContext)
    const { dToken } = useContext(DoctorContext)

    const isAuthenticated = aToken || dToken

    return (
        <Routes>

            {/* Login Route */}
            <Route
                path='/login'
                element={!isAuthenticated ? <Login /> : <Navigate to='/' />}
            />

            {/* Unauthenticated users */}
            {!isAuthenticated && (
                <Route path='*' element={<Navigate to='/login' />} />
            )}

            {/* Authenticated users */}
            {isAuthenticated && (
                <Route path='*' element={
                    <div className='bg-[#F8F9FD]'>
                        <Navbar />

                        <div className='flex items-start'>
                            <Sidebar />

                            <div className='flex-1 min-h-[90vh]'>
                                <Routes>

                                    {/* Admin Routes */}
                                    {aToken && (
                                        <>
                                            <Route path='/' element={<AdminDashboard />} />
                                            <Route path='/admin-dashboard' element={<AdminDashboard />} />
                                            <Route path='/all-appointments' element={<AllAppointments />} />
                                            <Route path='/add-doctor' element={<AddDoctor />} />
                                            <Route path='/doctor-list' element={<DoctorsList />} />
                                        </>
                                    )}

                                    {/* Doctor Routes */}
                                    {dToken && (
                                        <>
                                            <Route path='/' element={<DoctorDashboard />} />
                                            <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
                                            <Route path='/doctor-appointments' element={<DoctorAppointments />} />
                                            <Route path='/doctor-profile' element={<DoctorProfile />} />
                                        </>
                                    )}

                                </Routes>
                            </div>
                        </div>
                    </div>
                } />
            )}

        </Routes>
    )
}

export default App
