const express = require('express');
const TodoController = require('./controller/todo');
const Postgres = require('./pg');

const app = express();

(async function () {
  const db = new Postgres();
  await db.init();
  const controller = new TodoController(db);
  controller.install(app);

  app.listen(process.env.PORT, (err) => {
    if (err) console.error(err);
    console.log(`UP AND RUNNING @ ${process.env.PORT}`);
  });
})();
