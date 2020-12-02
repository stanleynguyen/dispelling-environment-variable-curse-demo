const { Client } = require('pg');

function Postgres(opts) {
  const { connectionString } = opts;
  const c = new Client({
    connectionString,
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
