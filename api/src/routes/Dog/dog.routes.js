const {Router} = require('express')
const router = Router()
const {Dog, Temperament} =require('../../db');

//const controller = require('../../controllers/dog.controller');
const { getallApiDb} = require('../../controllers/dog.controller')

router.get('/', async(req, res, next)=>{
    try {
        const {name} = req.query
        let dogsTotal = await getallApiDb();
        if (name){
            let dogName = await dogsTotal.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()))
        
            dogName.length?
            res.status(200).send(dogName):
            res.status(404).send( "No se econtraron perros con ese nombre")
         
        }
        
        else{
            res.status(200).send(dogsTotal)
        }
        // const alldogs = await  getallWQ();
        // res.status(200).json({data:alldogs})
    } catch (error) {
        next (error)
        
    }
});



router.post('/', async(req, res, next) => {
    const {name, height_min, weight_min, height_max, weight_max ,life_span, temperament, image} = req.body;
    try {
        
        let newDog = await Dog.create({
            name, 
            height: [height_min, height_max],
            weight: [weight_min, weight_max],
            life_span,
            image
        })
        // let temperamentoDB = await Temperament.findAll({
        //     where:{ name: temperament}
        
        // })

        newDog.addTemperament(temperament)
        //newDog.addTemperament(temperamentoDB)
        res.status(200).send('perro creado correctamente')
    
    } catch (error) {
        next(error)
    }
} )


router.get('/:id', async(req, res, next) =>{
    try {
        const {id} = req.params
        const alldogs = await getallApiDb()
        if(id){
            let dogId = await alldogs.filter(dog => dog.id ==id)
            dogId.length?
            res.status(200).json(dogId):
            res.status(404).send('no hay perro con ese id')
        }
    } catch (error) {
        next(error)
    }
})






//router.delete('/dogs', )
//router.put('/dogs/:id', )

module.exports = router;