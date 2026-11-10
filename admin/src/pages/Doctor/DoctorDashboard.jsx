
import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const DoctorDashboard = () => {

    const { dToken, dashData, getDashData } = useContext(DoctorContext)
    const { slotDateFormat } = useContext(AppContext)

    useEffect(() => {
        if (dToken) {
            getDashData()
        }
    }, [dToken])

    return dashData && (
        <div className='m-5'>

            {/* Dashboard Cards */}
            <div className='flex flex-wrap gap-3'>

                <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100'>
                    <img className='w-14' src={assets.earning_icon} alt="" />
                    <div>
                        <p className='text-xl font-semibold text-gray-600'>
                            {dashData.earnings}
                        </p>
                        <p className='text-gray-400'>Earnings</p>
                    </div>
                </div>

                <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100'>
                    <img className='w-14' src={assets.appointments_icon} alt="" />
                    <div>
                        <p className='text-xl font-semibold text-gray-600'>
                            {dashData.appointments}
                        </p>
                        <p className='text-gray-400'>Appointments</p>
                    </div>
                </div>

                <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100'>
                    <img className='w-14' src={assets.patients_icon} alt="" />
                    <div>
                        <p className='text-xl font-semibold text-gray-600'>
                            {dashData.patients}
                        </p>
                        <p className='text-gray-400'>Patients</p>
                    </div>
                </div>

            </div>

            {/* Latest Appointments */}
            <div className='bg-white mt-10 rounded border'>

                <div className='flex items-center gap-2.5 px-4 py-4 rounded-t border-b'>
                    <img src={assets.list_icon} alt="" />
                    <p className='font-semibold'>Latest Appointments</p>
                </div>

                <div>
                    {dashData.latestAppointments?.map((item, index) => (
                        <div
                            className='flex items-center px-6 py-3 gap-3 hover:bg-gray-100'
                            key={index}
                        >

                            <img
                                className='rounded-full w-10'
                                src={item.userData.image}
                                alt=""
                            />

                            <div className='flex-1 text-sm'>
                                <p className='text-gray-800 font-medium'>
                                    {item.userData.name}
                                </p>
                                <p className='text-gray-600'>
                                    {slotDateFormat
                                        ? slotDateFormat(item.slotDate)
                                        : item.slotDate
                                    }
                                </p>
                            </div>

                            <p className='text-[#5F6FFF] text-xs font-medium'>
                                {item.isCompleted
                                    ? 'Completed'
                                    : item.cancelled
                                        ? 'Cancelled'
                                        : 'Upcoming'
                                }
                            </p>

                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default DoctorDashboard
