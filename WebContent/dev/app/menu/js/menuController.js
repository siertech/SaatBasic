"use strict";

(function(){

	angular.module("stapiApp")

	.controller("menuCtrl", menuCtrl);

	function menuCtrl($scope, $controller){

		var ctrl = this;
		ctrl.scope = $scope;

		var menuItems =  [
			
			{path: "inicio", icon:"home", label:"Início"},
			{path: "helloworld", icon:"sentiment_very_satisfied", label:"Hello World"}
			
			];

		angular.extend(ctrl, $controller('stMenuController', {
			$scope: $scope,
			menuItems: menuItems,
			sidenavId:  "side-nav-principal"
		}));


	}	

})();

