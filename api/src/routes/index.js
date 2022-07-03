const { Router } = require('express');
// Importar todos los routers;

const Dog = require('./Dog/dog.routes')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', Dog)


module.exports = router;
