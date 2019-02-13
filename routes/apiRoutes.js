const express = require("express");
const postRoutes = express.Router();
const Lead = require("../models/Lead");

postRoutes.route("/").post(function(req, res) {
  const lead = new Lead(req.body);
  lead
    .save()
    .then(lead => {
      res.status(200).json({ lead: "Lead was added sucessfully!" });
    })
    .catch(err => {
      res.status(400).send("Unable to save to database");
    });
});

module.exports = postRoutes;
