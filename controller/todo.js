function TodoController(datastore) {
  this.db = datastore;
  return this;
}

TodoController.prototype.install = function (app) {
  app.get('/todos', this.todoHandler.bind(this));
};

TodoController.prototype.todoHandler = async function (req, res, next) {
  try {
    const todos = await this.db.getTodos();
    res.json({ todos });
  } catch (e) {
    next(e);
  }
};

module.exports = TodoController;
