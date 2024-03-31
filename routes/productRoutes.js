const express = require('express');
const productCtrl = require('../controllers/productCtrl');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/',productCtrl.get);
router.get('/page/:page/size/:size',productCtrl.get);
router.get('/:id',productCtrl.getById);

router.post('/',productCtrl.post);
router.delete('/:id',productCtrl.remove);
router.put('/:id',auth.authorizeAdmin,productCtrl.put);
router.patch('/:id',productCtrl.patch);

module.exports = router;