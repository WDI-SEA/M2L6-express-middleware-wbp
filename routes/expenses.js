const express = require('express');
const router = express.Router();

const expensesCtrl = require('../controllers/expenses');

router.get('/', expensesCtrl.index);

// GET /new
router.get('/new', expensesCtrl.new);

// POST /expenses
router.post('/', expensesCtrl.create);

// GET /:id
router.get('/:id', expensesCtrl.show);

// DELETE /:id
router.delete('/:id', expensesCtrl.delete)

module.exports = router;