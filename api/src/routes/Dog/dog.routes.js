const {Router} = require('express')
const router = Router()

//const controller = require('../../controllers/dog.controller');
const {getall} = require('../../controllers/dog.controller')

router.get('/dogs', getall);



//router.post('/dogs', )
//router.delete('/dogs', )
//router.put('/dogs/:id', )

module.exports = router;