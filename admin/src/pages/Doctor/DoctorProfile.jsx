
import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'

const DoctorProfile = () => {

    const {
        dToken,
        profileData,
        setProfileData,
        getProfileData,
        updateProfile
    } = useContext(DoctorContext)

    useEffect(() => {
        if (dToken) {
            getProfileData()
        }
    }, [dToken])

    return profileData && (
        <div className='m-5 w-full'>

            <div className='flex flex-col gap-4'>

                {/* Doctor Image and Basic Details */}
                <div className='flex flex-col sm:flex-row gap-4'>

                    <img
                        className='w-40 rounded-lg'
                        src={profileData.image}
                        alt="Doctor"
                    />

                    <div className='flex flex-col justify-center gap-2'>
                        <p className='text-2xl font-medium text-gray-700'>
                            {profileData.name}
                        </p>

                        <p className='text-gray-600'>
                            {profileData.degree} - {profileData.speciality}
                        </p>

                        <p className='text-gray-500 text-sm'>
                            {profileData.experience} experience
                        </p>
                    </div>

                </div>

                <form
                    onSubmit={updateProfile}
                    className='flex flex-col gap-4 text-sm max-w-lg'
                >

                    {/* About */}
                    <div>
                        <p className='text-gray-700 font-medium mb-2'>
                            About
                        </p>

                        <p className='text-gray-500'>
                            {profileData.about}
                        </p>
                    </div>

                    {/* Fees */}
                    <div className='flex flex-col gap-1'>
                        <label className='text-gray-700 font-medium'>
                            Consultation Fees
                        </label>

                        <input
                            type="number"
                            min="0"
                            value={profileData.fees || ''}
                            onChange={(e) => setProfileData(prev => ({
                                ...prev,
                                fees: e.target.value
                            }))}
                            className='border rounded px-3 py-2 max-w-40'
                            required
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <p className='text-gray-700 font-medium mb-2'>
                            Clinic Address
                        </p>

                        <div className='flex flex-col gap-2'>
                            <input
                                type="text"
                                placeholder="Address line 1"
                                value={profileData.address?.line1 || ''}
                                onChange={(e) => setProfileData(prev => ({
                                    ...prev,
                                    address: {
                                        ...prev.address,
                                        line1: e.target.value
                                    }
                                }))}
                                className='border rounded px-3 py-2'
                            />

                            <input
                                type="text"
                                placeholder="Address line 2"
                                value={profileData.address?.line2 || ''}
                                onChange={(e) => setProfileData(prev => ({
                                    ...prev,
                                    address: {
                                        ...prev.address,
                                        line2: e.target.value
                                    }
                                }))}
                                className='border rounded px-3 py-2'
                            />
                        </div>
                    </div>

                    {/* Availability */}
                    <div className='flex items-center gap-2'>
                        <input
                            type="checkbox"
                            checked={Boolean(profileData.available)}
                            onChange={(e) => setProfileData(prev => ({
                                ...prev,
                                available: e.target.checked
                            }))}
                        />

                        <label className='text-gray-700'>
                            Available for appointments
                        </label>
                    </div>

                    <button
                        type="submit"
                        className='bg-primary text-white px-8 py-2 rounded-full w-fit'
                    >
                        Save Changes
                    </button>

                </form>

            </div>

        </div>
    )
}

export default DoctorProfile
