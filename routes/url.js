const express = require("express");
const {
  handleUrlGeneration,
  handleGetAllUrls,
  handleRedirectUrl,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleUrlGeneration);

router.get("/", handleGetAllUrls);

router.get("/:shortId", handleRedirectUrl);

module.exports = router;
