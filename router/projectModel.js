const db = require("../data/db-config");

module.exports = {
  findProjects,
  findResources,
  findTasks,
  addResource,
  findBypid,
  findByrid,
  findBytid,
  addProj,
  addTask
};

function findProjects() {
  return db("projects");
}

function findBypid(id) {
  return db("projects")
    .where({ id })
    .first();
}
function findByrid(id) {
  return db("resources")
    .where({ id })
    .first();
}
function findBytid(id) {
  return db("tasks")
    .where({ id })
    .first();
}

function findResources() {
  return db("resources");
}

function findTasks() {
  return db("tasks as t")
    .join("projects as p", "p.id", "t.project_id")
    .select(
      "p.name",
      "p.description",
      "t.description",
      "t.notes",
      "t.completed"
    );
}

function addResource(added) {
  return db("resources")
    .insert(added, "id")
    .then(res => {
      return findByrid(res[0]);
    });
}

function addProj(added) {
  return db("projects")
    .insert(added, "id")
    .then(res => {
      return findBypid(res[0]);
    });
}

function addTask(added) {
  return db("tasks")
    .insert(added, "id")
    .then(res => {
      return findBytid(res[0]);
    });
}