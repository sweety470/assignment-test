const router = require('express').Router()
const UserController = require('../controller/user')


router.post('/addUser',UserController.addUser)
router.get('/getUsers',UserController.getUsers)
router.post('/getUser',UserController.getUser)
router.post('/updateUser',UserController.updateRecord)
router.post('/deleteUser',UserController.deleteUser)

module.exports = router;