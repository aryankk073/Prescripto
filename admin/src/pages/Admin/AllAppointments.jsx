
import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { assets } from '../../assets/assets'

const AllAppointments = () => {

    const {
        aToken,
        appointments,
        getAllAppointments,
        cancelAppointment
    } = useContext(AdminContext)

    useEffect(() => {
        if (aToken) {
            getAllAppointments()
        }
    }, [aToken])

    return (
        <div className='w-full max-w-6xl m-5'>

            <p className='mb-3 text-lg font-medium'>
                All Appointments
            </p>

            <div className='bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll'>

                <div className='hidden sm:grid grid-cols-[0.5fr_2fr_1.5fr_1fr_1fr_1fr] gap-1 py-3 px-6 border-b bg-gray-50 font-medium'>
                    <p>#</p>
                    <p>Patient</p>
                    <p>Doctor</p>
                    <p>Date & Time</p>
                    <p>Payment</p>
                    <p>Action</p>
                </div>

                {
                    appointments.map((item, index) => (

                        <div
                            className='flex flex-wrap justify-between max-sm:gap-3 sm:grid sm:grid-cols-[0.5fr_2fr_1.5fr_1fr_1fr_1fr] gap-1 items-center text-gray-600 py-3 px-6 border-b hover:bg-gray-50'
                            key={item._id}
                        >

                            <p className='max-sm:hidden'>
                                {index + 1}
                            </p>

                            <div className='flex items-center gap-2'>

                                <img
                                    className='w-8 h-8 rounded-full object-cover'
                                    src={item.userData.image}
                                    alt=""
                                />

                                <p>
                                    {item.userData.name}
                                </p>

                            </div>

                            <div className='flex items-center gap-2'>

                                <img
                                    className='w-8 h-8 rounded-full object-cover bg-gray-100'
                                    src={item.docData.image}
                                    alt=""
                                />

                                <p>
                                    {item.docData.name}
                                </p>

                            </div>

                            <p>
                                {item.slotDate.replaceAll('_', '-')}
                                <br />
                                {item.slotTime}
                            </p>

                            <p>
                                {item.payment ? (
                                    <span className='text-green-500'>
                                        Paid
                                    </span>
                                ) : (
                                    <span className='text-yellow-600'>
                                        Pending
                                    </span>
                                )}
                            </p>

                            {
                                item.cancelled ? (
                                    <p className='text-red-400 text-xs font-medium'>
                                        Cancelled
                                    </p>
                                ) : item.isCompleted ? (
                                    <p className='text-green-500 text-xs font-medium'>
                                        Completed
                                    </p>
                                ) : (
                                    <button
                                        onClick={() => cancelAppointment(item._id)}
                                        className='text-red-500 hover:text-red-700 text-xs font-medium'
                                    >
                                        Cancel
                                    </button>
                                )
                            }

                        </div>

                    ))
                }

                {
                    appointments.length === 0 && (
                        <p className='text-center py-10 text-gray-500'>
                            No appointments found
                        </p>
                    )
                }

            </div>

        </div>
    )
}

export default AllAppointments
