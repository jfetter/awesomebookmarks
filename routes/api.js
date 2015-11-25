"use strict";

var express = require("express")
var router = express.Router();

var Link = require("../models/link")

router.post("/add", function(req, res){
	Link.create(req.body, function(err, newLink){
		if (err) return res.status(400).send(err)
		res.send(newLink)
	});
});

router.get("/get", function(req, res){
	Link.find({}, function(err, allLinks){
		if (err) return res.status(400).send(err)
		res.send(allLinks)
	});
});


module.exports = router;