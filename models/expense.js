module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};

const expenses = [
  {
    id: 32230,
    date: '2023-01-25',
    description: 'Photocopies',
    amount: '9.64'
  },
  {
    id: 87867,
    date: '2023-01-26',
    description: 'Uber ride to client',
    amount: '85.45'
  },
  {
    id: 78897,
    date: '2023-01-27',
    description: 'Team Lunch',
    amount: '103.55'
  }
];

function create(expense) {
  expense.id = Date.now() % 1000000;
  expenses.push(expense);
}
function getAll() {
  return expenses;
}

function getOne(id) {
  id = parseInt(id);
  return expenses.find(e => e.id === id);
}

function deleteOne(id) {
    id = parseInt(id);
    // Find the index for the todo
    const idx = expenses.findIndex(expense => expense.id === id);
    expenses.splice(idx, 1);
}