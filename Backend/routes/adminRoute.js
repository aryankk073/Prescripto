import express from 'express'

import {
    addDoctor,
    allDoctors,
    loginAdmin,
    allAppointments,
    cancelAppointment,
    adminDashboard
} from '../controllers/adminController.js'

import upload from '../middleware/multer.js'
import authAdmin from '../middleware/authAdmin.js'
import { changeAvailablity } from '../controllers/doctorController.js'

const adminRouter = express.Router()

// Admin login
adminRouter.post('/login', loginAdmin)

// Add doctor
adminRouter.post(
    '/add-doctor',
    authAdmin,
    upload.single('image'),
    addDoctor
)

// Get all doctors
adminRouter.post('/all-doctors', authAdmin, allDoctors)

// Change doctor availability
adminRouter.post(
    '/change-availability',
    authAdmin,
    changeAvailablity
)

// Get all appointments
adminRouter.post(
    '/all-appointments',
    authAdmin,
    allAppointments
)

// Cancel appointment
adminRouter.post(
    '/cancel-appointment',
    authAdmin,
    cancelAppointment
)

// Dashboard data
adminRouter.get(
    '/dashboard',
    authAdmin,
    adminDashboard
)

export default adminRouter