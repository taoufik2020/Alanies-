const express = require("express");
const router = express.Router();
const { AddUrl, getUrls } = require("../Controllers/urlController");

router.post("/save", AddUrl);
router.get("/getAll", getUrls);
module.exports = router;
