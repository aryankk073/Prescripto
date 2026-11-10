
import express from 'express'

import {
    loginDoctor,
    doctorList,
    doctorAppointments,
    appointmentComplete,
    appointmentCancel,
    doctorDashboard,
    doctorProfile,
    updateDoctorProfile
} from '../controllers/doctorController.js'

import authDoctor from '../middleware/authDoctor.js'

const doctorRouter = express.Router()

// Public doctor APIs
doctorRouter.get('/list', doctorList)
doctorRouter.post('/login', loginDoctor)

// Protected doctor APIs
doctorRouter.post('/appointments', authDoctor, doctorAppointments)

doctorRouter.post(
    '/complete-appointment',
    authDoctor,
    appointmentComplete
)

doctorRouter.post(
    '/cancel-appointment',
    authDoctor,
    appointmentCancel
)

doctorRouter.get(
    '/dashboard',
    authDoctor,
    doctorDashboard
)

doctorRouter.get(
    '/profile',
    authDoctor,
    doctorProfile
)

doctorRouter.post(
    '/update-profile',
    authDoctor,
    updateDoctorProfile
)

export default doctorRouter
