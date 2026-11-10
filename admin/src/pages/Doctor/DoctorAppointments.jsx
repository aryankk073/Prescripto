
import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const DoctorAppointments = () => {

    const {
        dToken,
        appointments,
        getAppointments,
        completeAppointment,
        cancelAppointment
    } = useContext(DoctorContext)

    const { slotDateFormat } = useContext(AppContext)

    useEffect(() => {
        if (dToken) {
            getAppointments()
        }
    }, [dToken])

    return (
        <div className='w-full max-w-6xl m-5'>

            <p className='mb-3 text-lg font-medium'>
                All Appointments
            </p>

            <div className='bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll'>

                <div className='hidden sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] grid-flow-col py-3 px-6 border-b'>
                    <p>#</p>
                    <p>Patient</p>
                    <p>Payment</p>
                    <p>Date & Time</p>
                    <p>Fees</p>
                    <p>Action</p>
                </div>

                {appointments?.map((item, index) => (
                    <div
                        className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50'
                        key={item._id}
                    >

                        <p className='max-sm:hidden'>
                            {index + 1}
                        </p>

                        <div className='flex items-center gap-2'>
                            <img
                                className='w-8 rounded-full'
                                src={item.userData?.image}
                                alt=""
                            />
                            <p>{item.userData?.name}</p>
                        </div>

                        <div>
                            <p className='text-xs inline border px-2 py-1 rounded-full'>
                                {item.payment ? 'Online' : 'Cash'}
                            </p>
                        </div>

                        <p>
                            {slotDateFormat
                                ? slotDateFormat(item.slotDate)
                                : item.slotDate
                            }, {item.slotTime}
                        </p>

                        <p>
                            {item.amount}
                        </p>

                        <div className='flex items-center gap-2'>

                            {item.cancelled ? (
                                <p className='text-red-500 text-xs font-medium'>
                                    Cancelled
                                </p>
                            ) : item.isCompleted ? (
                                <p className='text-green-500 text-xs font-medium'>
                                    Completed
                                </p>
                            ) : (
                                <>
                                    <img
                                        onClick={() => cancelAppointment(item._id)}
                                        className='w-8 cursor-pointer'
                                        src={assets.cancel_icon}
                                        alt="Cancel appointment"
                                        title="Cancel appointment"
                                    />

                                    <img
                                        onClick={() => completeAppointment(item._id)}
                                        className='w-8 cursor-pointer'
                                        src={assets.tick_icon}
                                        alt="Complete appointment"
                                        title="Complete appointment"
                                    />
                                </>
                            )}

                        </div>

                    </div>
                ))}

                {appointments?.length === 0 && (
                    <p className='text-center py-8 text-gray-500'>
                        No appointments found.
                    </p>
                )}

            </div>

        </div>
    )
}

export default DoctorAppointments
