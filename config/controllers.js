"use strict";

var myApp = angular.module("myApp");

myApp.controller("mainCtrl", ["LinkService","$scope", function(LinkService, $scope){
	$scope.title = "MAIN PAGE !!!"
	LinkService.getLinks();
	// when the links are back from the backend update the page
	$scope.$watchCollection(function(){
		return LinkService.links;
	}, function(links){
		$scope.links = LinkService.links;
		console.log("controller: $scope.links", $scope.links)
	})
}]);

myApp.controller("newlinkCtrl", ["LinkService","$scope", function(LinkService, $scope){
	$scope.title = "NEW LINK"
	$scope.newLink = {tags: []};
	$scope.addTag = function(){
		$scope.newLink.tags.push("");
	}
	$scope.submitForm = function(){
		console.log($scope.newLink);
		LinkService.addLink($scope.newLink)
		$scope.newLink = {tags: []};
	}

}]);

myApp.controller("tagCtrl", ["LinkService", "$scope", "$stateParams", function(LinkService, $scope, $stateParams){
	$scope.title = "TAG PAGE FOR "
	$scope.links = LinkService.tagLinks($stateParams.tagname);
	console.log($scope.links);
}]);

myApp.controller("tagsCtrl", ["LinkService", "$scope", function(LinkService, $scope){
	$scope.title = "TAGS"

}]);