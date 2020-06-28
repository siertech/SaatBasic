"use strict";
(function(){
	angular.module("stapiApp") 
	.config(function($routeProvider, $httpProvider){

	//Rota para listagem dos objetos
	$routeProvider.when("/test",{

		template:"<test-list ></test-list>",
	    
	}); 

})

})();
