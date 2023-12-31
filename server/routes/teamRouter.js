const Router = require('express')
const router = new Router()
const teamController = require('../controllers/teamController')

router.post('/', teamController.create)
router.get('/', teamController.getAll)
router.get('/:id', teamController.getOne)


module.exports = router