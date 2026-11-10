
import doctorModel from "../models/doctorModel.js"
import appointmentModel from "../models/appointmentModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// Doctor login
const loginDoctor = async (req, res) => {
    try {

        const { email, password } = req.body

        const doctor = await doctorModel.findOne({ email })

        if (!doctor) {
            return res.json({
                success: false,
                message: "Invalid Credentials"
            })
        }

        const isMatch = await bcrypt.compare(
            password,
            doctor.password
        )

        if (!isMatch) {
            return res.json({
                success: false,
                message: "Invalid Credentials"
            })
        }

        const token = jwt.sign(
            { id: doctor._id },
            process.env.JWT_SECRET
        )

        res.json({
            success: true,
            token
        })

    } catch (error) {
        console.log(error)

        res.json({
            success: false,
            message: error.message
        })
    }
}


// Change doctor availability (Admin)
const changeAvailablity = async (req, res) => {
    try {

        const { docId } = req.body

        const docData = await doctorModel.findById(docId)

        if (!docData) {
            return res.json({
                success: false,
                message: "Doctor not found"
            })
        }

        await doctorModel.findByIdAndUpdate(docId, {
            available: !docData.available
        })

        res.json({
            success: true,
            message: 'Availability Changed'
        })

    } catch (error) {
        console.log(error)

        res.json({
            success: false,
            message: error.message
        })
    }
}


// Get doctor list (Public)
const doctorList = async (req, res) => {
    try {

        const doctors = await doctorModel
            .find({})
            .select(['-password', '-email'])

        res.json({
            success: true,
            doctors
        })

    } catch (error) {
        console.log(error)

        res.json({
            success: false,
            message: error.message
        })
    }
}


// Get appointments belonging to logged-in doctor
const doctorAppointments = async (req, res) => {
    try {

        const { docId } = req.body

        const appointments = await appointmentModel.find({
            docId
        })

        res.json({
            success: true,
            appointments
        })

    } catch (error) {
        console.log(error)

        res.json({
            success: false,
            message: error.message
        })
    }
}


// Complete appointment
const appointmentComplete = async (req, res) => {
    try {

        const { docId, appointmentId } = req.body

        const appointment = await appointmentModel.findOne({
            _id: appointmentId,
            docId
        })

        if (!appointment) {
            return res.json({
                success: false,
                message: "Appointment not found"
            })
        }

        if (appointment.cancelled) {
            return res.json({
                success: false,
                message: "Cancelled appointment cannot be completed"
            })
        }

        if (appointment.isCompleted) {
            return res.json({
                success: false,
                message: "Appointment already completed"
            })
        }

        await appointmentModel.findByIdAndUpdate(appointmentId, {
            isCompleted: true
        })

        res.json({
            success: true,
            message: "Appointment Completed"
        })

    } catch (error) {
        console.log(error)

        res.json({
            success: false,
            message: error.message
        })
    }
}


// Cancel appointment
const appointmentCancel = async (req, res) => {
    try {

        const { docId, appointmentId } = req.body

        const appointment = await appointmentModel.findOne({
            _id: appointmentId,
            docId
        })

        if (!appointment) {
            return res.json({
                success: false,
                message: "Appointment not found"
            })
        }

        if (appointment.cancelled) {
            return res.json({
                success: false,
                message: "Appointment already cancelled"
            })
        }

        if (appointment.isCompleted) {
            return res.json({
                success: false,
                message: "Completed appointment cannot be cancelled"
            })
        }

        await appointmentModel.findByIdAndUpdate(appointmentId, {
            cancelled: true
        })

        // Release the booked slot
        const doctor = await doctorModel.findById(docId)

        if (doctor) {
            const slotsBooked = doctor.slots_booked || {}

            if (slotsBooked[appointment.slotDate]) {
                slotsBooked[appointment.slotDate] =
                    slotsBooked[appointment.slotDate].filter(
                        time => time !== appointment.slotTime
                    )

                await doctorModel.findByIdAndUpdate(docId, {
                    slots_booked: slotsBooked
                })
            }
        }

        res.json({
            success: true,
            message: "Appointment Cancelled"
        })

    } catch (error) {
        console.log(error)

        res.json({
            success: false,
            message: error.message
        })
    }
}


// Get doctor dashboard data
const doctorDashboard = async (req, res) => {
    try {

        const { docId } = req.body

        const appointments = await appointmentModel.find({
            docId
        })

        let earnings = 0
        let patients = []

        appointments.forEach(item => {

            if (item.payment && !item.cancelled) {
                earnings += item.amount
            }

            if (!patients.includes(item.userId)) {
                patients.push(item.userId)
            }

        })

        const dashData = {
            earnings,
            appointments: appointments.length,
            patients: patients.length,
            latestAppointments: appointments.reverse().slice(0, 5)
        }

        res.json({
            success: true,
            dashData
        })

    } catch (error) {
        console.log(error)

        res.json({
            success: false,
            message: error.message
        })
    }
}


// Get doctor profile
const doctorProfile = async (req, res) => {
    try {

        const { docId } = req.body

        const profileData = await doctorModel
            .findById(docId)
            .select('-password')

        if (!profileData) {
            return res.json({
                success: false,
                message: "Doctor not found"
            })
        }

        res.json({
            success: true,
            profileData
        })

    } catch (error) {
        console.log(error)

        res.json({
            success: false,
            message: error.message
        })
    }
}


// Update doctor profile
const updateDoctorProfile = async (req, res) => {
    try {

        const { docId, fees, address, available } = req.body

        await doctorModel.findByIdAndUpdate(docId, {
            fees,
            address: JSON.parse(address),
            available
        })

        res.json({
            success: true,
            message: "Profile Updated"
        })

    } catch (error) {
        console.log(error)

        res.json({
            success: false,
            message: error.message
        })
    }
}


export {
    loginDoctor,
    changeAvailablity,
    doctorList,
    doctorAppointments,
    appointmentComplete,
    appointmentCancel,
    doctorDashboard,
    doctorProfile,
    updateDoctorProfile
}
