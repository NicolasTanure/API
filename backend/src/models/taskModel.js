const connection = require('./connection');

const getAll = async ()=>{
  const task = await connection.execute('SELECT * FROM tasks');
  return task;
};

module.exports = {
  getAll
};

