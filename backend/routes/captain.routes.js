const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controller/captain.controller');
const authMiddleware = require('../middleware/users.middlewares');

router.post('/register', [
    body('email').isEmail().withMessage('invalid email'),
    body('fullName.firstName').isLength({ min: 3 }).withMessage('3 chars long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be length 6'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('color required'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('plate required'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('capacity must be greater than 0'),
    body('vehicle.vehicleType').isIn(['car', 'motercycle', 'auto']).withMessage('vehicle type must be car, motercycle or auto')

], captainController.registerCaptain);



router.post('/login', [
    body('email').isEmail().withMessage('invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be length 6'),
], captainController.loginCaptain);


router.get('/profile',authMiddleware.authCaptain ,captainController.getCaptainProfile)

router.get('/logout',authMiddleware.authCaptain ,captainController.logoutCaptain)


module.exports = router;