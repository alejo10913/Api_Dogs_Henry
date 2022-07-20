const { Router } = require('express');
// Importar todos los routers;

const Dog = require('./Dog/dog.routes')
const Temp = require('./temperament/temperament.routes')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', Dog)
router.use('/temperament', Temp)

module.exports = router;
