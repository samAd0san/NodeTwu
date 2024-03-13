const express = require('express');
const bookCtrl = require('../controllers/bookCtrl');

const router = express.Router();

router.get('/books',bookCtrl.books);
router.get('/authors',bookCtrl.authors);
router.get('/books/:id',bookCtrl.getById);
router.post('/books',bookCtrl.post);
router.delete('/books/:id',bookCtrl.remove);
router.put('/books/:id',bookCtrl.put);
router.patch('/books/:id',bookCtrl.patch);

module.exports = router;