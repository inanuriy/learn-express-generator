const express = require("express");
const router = express.Router();

router.get("/", require("./controller").getAll);
router.get("/id/:id", require("./controller").getById);
router.get("/job/:job", require("./controller").getOne);
router.post("/", require("./controller").postData);
router.delete("/id/:id", require("./controller").deleteOne);
router.delete("/", require("./controller").deleteAll);
router.put("/id/:id", require("./controller").updateOne);

module.exports = router;
