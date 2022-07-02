const { Router } = require('express');
// Importar todos los routers;

const Dog = require('./Dog/dog.routes')
const Temperament = require('./temperament/temperament.routes')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', Dog)
router.use('/', Temperament)

module.exports = router;
