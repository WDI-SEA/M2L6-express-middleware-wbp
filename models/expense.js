module.exports = {
  getAll,
  getOne,
  delete: deleteExpense,
  create,
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

function getAll() {
  return expenses;
}

function getOne(id) {
  id = parseInt(id);
  return expenses.find(e => e.id === id);
}

function deleteExpense(id){
  let idx = expenses.findIndex(e=>e.id===id)
  expenses.splice(idx,1)
}

function create(obj){
  obj.id  = Date.now() % 100000
  expenses.push(obj)
}