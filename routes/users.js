var express = require("express");
var assert = require("assert");
var restify = require("restify-clients");
var router = express.Router();

//Creates a JSON client

var client = restify.createJSONClient({
  url: "http://localhost:4000",
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  client.get("/users", function (err, request, response, obj) {
    assert.ifError(err);

    res.end(JSON.stringify(obj, null, 2));
  });
});


/* GET :id user data */
router.get("/:id", function (req, res, next) {
  client.get(`/users/${req.params.id}`, function (err, request, response, obj) {
    assert.ifError(err);

    res.end(JSON.stringify(obj, null, 2));
  });
});


module.exports = router;
