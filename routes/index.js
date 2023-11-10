const router = require('express').Router();
router.use('/', require('./swagger'));
router.get('/', (req, res) => { 
    //#swagger.tags=['Hello world']
    res.send('hello world');
});
router.use("/contacts", require('./contacts'));
module.exports = router;