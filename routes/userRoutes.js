const express = require('express');
const userCtrl = require('../controllers/userCtrl');

const router = express.Router();

router.post('/',userCtrl.add);

module.exports = router;