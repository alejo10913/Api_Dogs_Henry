const {Router} = require('express')
const router = Router()

//const controller = require('../../controllers/dog.controller');
const {getall} = require('../../controllers/temperament.controller')

router.get('/temperament', getall);



module.exports = router;