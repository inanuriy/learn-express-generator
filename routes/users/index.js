const express = require("express");
const router = express.Router();
const {upload} = require("../../config")

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
router.post("/", upload.single("avatar"), require("./controller").postData);

module.exports = router;
