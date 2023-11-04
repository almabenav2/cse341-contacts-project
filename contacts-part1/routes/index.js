const router = require('express').Router();

// router.get('/', (req, res) => { res.send('hello');});
router.use("/contacts", require('./contacts'));
module.exports = router;