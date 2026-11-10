
import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { assets } from '../../assets/assets'

const Dashboard = () => {

    const {
        aToken,
        dashData,
        getDashboardData
    } = useContext(AdminContext)

    useEffect(() => {
        if (aToken) {
            getDashboardData()
        }
    }, [aToken])

    return (
        <div className='m-5 w-full'>

            <div className='flex flex-wrap gap-3'>

                {/* Doctors Card */}
                <div className='flex items-center gap-3 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>

                    <img
                        className='w-14'
                        src={assets.doctor_icon}
                        alt=""
                    />

                    <div>
                        <p className='text-xl font-semibold text-gray-600'>
                            {dashData ? dashData.doctors : '...'}
                        </p>

                        <p className='text-gray-400'>
                            Doctors
                        </p>
                    </div>

                </div>

                {/* Appointments Card */}
                <div className='flex items-center gap-3 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>

                    <img
                        className='w-14'
                        src={assets.appointments_icon}
                        alt=""
                    />

                    <div>
                        <p className='text-xl font-semibold text-gray-600'>
                            {dashData ? dashData.appointments : '...'}
                        </p>

                        <p className='text-gray-400'>
                            Appointments
                        </p>
                    </div>

                </div>

                {/* Patients Card */}
                <div className='flex items-center gap-3 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>

                    <img
                        className='w-14'
                        src={assets.patients_icon}
                        alt=""
                    />

                    <div>
                        <p className='text-xl font-semibold text-gray-600'>
                            {dashData ? dashData.patients : '...'}
                        </p>

                        <p className='text-gray-400'>
                            Patients
                        </p>
                    </div>

                </div>

            </div>

            {/* Latest Appointments */}

            <div className='bg-white mt-10 rounded border'>

                <div className='flex items-center gap-2.5 px-4 py-4 border-b'>

                    <img
                        className='w-6'
                        src={assets.list_icon}
                        alt=""
                    />

                    <p className='font-semibold'>
                        Latest Appointments
                    </p>

                </div>

                <div className='divide-y'>

                    {
                        dashData && dashData.latestAppointments.map(
                            (item, index) => (

                                <div
                                    className='flex items-center px-6 py-3 gap-3 hover:bg-gray-50'
                                    key={item._id}
                                >

                                    <img
                                        className='rounded-full w-10 h-10 object-cover'
                                        src={item.docData.image}
                                        alt=""
                                    />

                                    <div className='flex-1 text-sm'>

                                        <p className='text-gray-800 font-medium'>
                                            {item.docData.name}
                                        </p>

                                        <p className='text-gray-500'>
                                            Booking for {item.userData.name}
                                        </p>

                                    </div>

                                    <div className='text-sm text-right'>

                                        <p className='text-gray-600'>
                                            {item.slotDate.replaceAll('_', '-')}
                                        </p>

                                        <p className='text-gray-400'>
                                            {item.slotTime}
                                        </p>

                                    </div>

                                    {
                                        item.cancelled ? (
                                            <p className='text-red-500 text-xs'>
                                                Cancelled
                                            </p>
                                        ) : item.isCompleted ? (
                                            <p className='text-green-500 text-xs'>
                                                Completed
                                            </p>
                                        ) : (
                                            <p className='text-blue-500 text-xs'>
                                                Upcoming
                                            </p>
                                        )
                                    }

                                </div>

                            )
                        )
                    }

                    {
                        dashData && dashData.latestAppointments.length === 0 && (
                            <p className='text-center py-8 text-gray-500'>
                                No appointments available
                            </p>
                        )
                    }

                </div>

            </div>

        </div>
    )
}

export default Dashboard
