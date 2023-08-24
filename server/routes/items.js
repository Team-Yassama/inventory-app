const express = require("express");
const router = express.Router();
const {Item} = require("../models");

// GET /item
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

router.get("/items/:id", async (req, res, next) => {
  try {
    const singleItem = await Item.findByPk(req.params.id);
    res.send(singleItem);
 } catch (error) {
  next(error);
 }
});

module.exports = router;
