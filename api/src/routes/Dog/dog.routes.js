const {Router} = require('express')
const router = Router()

//const controller = require('../../controllers/dog.controller');
const {getall} = require('../../controllers/dog.controller')

router.get('/', async(req, res, next)=>{
    try {
        const alldogs = await getall();
        res.status(200).json({data:alldogs})
    } catch (error) {
        next (error)
        
    }
});



//router.post('/dogs', )
//router.delete('/dogs', )
//router.put('/dogs/:id', )

module.exports = router;