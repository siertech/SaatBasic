"use strict";
(function(){
	angular.module("stapiApp") 
	.config(function($routeProvider, $httpProvider){

	//Rota para listagem dos objetos
	$routeProvider.when("/imovel",{

		template:"<imovel-list ></imovel-list>",
	    
	}); 

})

})();
