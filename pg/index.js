const { Client } = require('pg');

function Postgres() {
  const c = new Client({
    connectionString: process.env.POSTGRES_CONNECTION_URL,
  });
  this.client = c;
  return this;
}

Postgres.prototype.init = async function () {
  await c.connect();
  return this;
};

Postgres.prototype.getTodos = async function () {
  return this.client.query('SELECT * FROM todos');
};

module.exports = Postgres;
