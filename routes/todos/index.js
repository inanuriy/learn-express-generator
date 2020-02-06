const express = require("express");
const router = express.Router();

const { getAll, getById } = require("./controller");

router.get("/", getAll);
router.get("/:id", getById);
router.get("/:username", require("./controller").getByUserName); // cara panggil yang lain

module.exports = router;
