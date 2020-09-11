const express = require('express')

const {signup,signin,requireSignin} = require('../controllers/category.controller.js')

const router = express.Router()


router.route('/admin/signup').post(signup)
router.route('/admin/signin').post(signin)


module.exports = router

