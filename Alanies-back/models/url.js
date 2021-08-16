const mongoose = require("mongoose");
const shortId = require('shortid')
const UrlSchema = new mongoose.Schema({
  fullUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    default: shortId.generate
  },
  clicks: {
    type: Number,
    required: true,
    default:0
  },
});
module.exports = mongoose.model("Url", UrlSchema);
