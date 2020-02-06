const express = require("express");
const router = express.Router();

const {
    getAll,
    getByEmail,
    updateByEmail,
    deleteByEmail
} = require("./controller");

router.get("/", getAll);
router.get("/:email", getByEmail);
router.put("/:email", updateByEmail);
router.delete("/:email", deleteByEmail);

module.exports = router;
