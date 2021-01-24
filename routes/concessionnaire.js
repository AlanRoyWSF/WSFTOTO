const express = require("express");
const { Concessionaire } = require("../db/models/index");

const router = express.Router();

router.get("/concessionaires", function (req, res) {
  Concessionaire.findAll({
    where: req.query,
  }).then((data) => {
    res.json(data);
  });
});

router.get("/concessionaires/:id", function (req, res) {
  const id = req.params.id;

  Concessionaire.findByPk(id).then((data) => {
    if (data) res.json(data);
    else res.sendStatus(404);
  });
});

router.delete("/concessionaires/:id", function (req, res) {
  const id = req.params.id;

  Concessionaire.destroy({
    where: {
      id,
    },
  }).then((data) => {
    if (data) res.sendStatus(204);
    else res.sendStatus(404);
  });
});

router.post("/concessionaires", function (req, res) {
  Concessionaire.create(req.body).then((data) => {
    if (data) res.sendStatus(201).json(data);
    else res.sendStatus(404);
  });
});

router.put("/concessionaires/:id", function (req, res) {
  const id = req.params.id;

  Concessionaire.update(req.body, { where: { id } }).then(([nbUpdated]) => {
    if (nbUpdated === 0) res.sendStatus(404);
    else
    Concessionaire.findByPk(id).then((data) => {
        if (data) res.json(data);
        else res.sendStatus(404);
      });
  });
});

module.exports = router;
