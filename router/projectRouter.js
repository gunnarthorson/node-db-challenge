const express = require("express");

const db = require("./projectModel");

const router = express.Router();

router.get("/projects", (req, res) => {
  db.findProjects()
    .then(projs => {
      res.status(200).json(projs);
    })
    .catch(err => {
      res.status(500).json({ message: "failed to get projects" });
    });
});

router.get("/resources", (req, res) => {
  db.findResources()
    .then(reso => {
      res.status(200).json(reso);
    })
    .catch(err => {
      res.status(500).json({ message: "failed to get resources" });
    });
});

router.get("/tasks", (req, res) => {
  db.findTasks()
    .then(reso => {
      console.log("get task reso", reso);
      res.status(200).json(reso);
    })
    .catch(err => {
      res.status(500).json({ message: "failed to get tasks" });
    });
});

router.post("/resources", (req, res) => {
  db.addResource(req.body)
    .then(reso => {
      res.status(201).json(reso);
    })
    .catch(err => {
      res.status(500).json({ message: "failed to add resource" });
    });
});

router.post("/projects", (req, res) => {
  db.addProj(req.body)
    .then(reso => {
      res.status(201).json(reso);
    })
    .catch(err => {
      res.status(500).json({ message: "failed to add project" });
    });
});

router.post("/tasks", (req, res) => {
  db.addTask(req.body)
    .then(reso => {
      res.status(201).json(reso);
    })
    .catch(err => {
      res.status(500).json({ message: "failed to add task" });
    });
});

module.exports = router;