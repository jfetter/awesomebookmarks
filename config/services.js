"use strict";

var myApp = angular.module("myApp");

myApp.service("LinkService",[ "$http", function($http){
	this.links = [];

	this.addLink = function(link){
		console.log("links 1", this.links)
		//use arrow function to preserve the "this" from before api request
		$http.post("http://localhost:3005/api/add", link).then( res => {
			this.links.push(res);
			console.log(res);
			console.log("add links 2",this.links)
		});
	};

	this.getLinks = function(){
		console.log("get links 1", this.links)
		if (this.links.length === 0){
		$http.get("http://localhost:3005/api/get").then( res => {
			//res = res.toString();
			//res = JSON.parse(res)
			//&format=json
			this.links.push(res);
			console.log("get links 2",this.links)
			});
		}
		return this.links;
	};

	this.tagLinks = function(tagName){
		console.log(this.links)
		return this.links.filter(function(link){
			return link.tag.some(function(tag){
				if(tag === tagName){
					return link;
				}
			})
		})
	}



}]);

