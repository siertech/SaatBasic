"use strict";
(function(){
	angular.module("stapiApp") 
	.config(function($routeProvider, $httpProvider){

	//Rota para listagem dos objetos
	$routeProvider.when("/rastreamento",{

		template:"<rastreamento-list ></rastreamento-list>",
	    
	}); 

})

})();
