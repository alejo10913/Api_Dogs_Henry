const {Router} = require('express')
const router = Router()
const {getTemperaments} = require('../../controllers/temperament.controller')


router.get('/', async (req, res, next) => {
    try {
      const temperament = await getTemperaments();
      res.status(200).json(temperament);
    } catch (error) {
      next(error);
    }
  });

  module.exports = router;