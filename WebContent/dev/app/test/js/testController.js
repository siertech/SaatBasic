"use strict";
(function(){

	angular.module("stapiApp")
	.controller("testDetalheCtrl", testDetalheCtrl)
	.controller("testListCtrl", testListCtrl);

	var objectName = "Test";

	function testDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function testListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListControl', {
			$scope: $scope,
			options: {
				objectName: objectName,
				detalheTemplateUrl:"app/test/html/testDetalhe.html",
				detalheController: "testDetalheCtrl",
				detalheControllerAs: "$testDetalheCtrl",
				fixProperties: ctrl.fixProperties || {}
			},
			filtros:  [ 
				{attr:'label', label: ' Buscar pelo label '}

				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "label", attr: "label", orderBy: true, labelIcon: ""}
			
		];
	
		ctrl.data.orderBy = "label";
		
		//Objeto que define as opções para listagem dos itens
		ctrl.data.requestListParams = {	
				objectName: objectName,
				maxItensPerPage: config.confs.maxItemsPerPage || 9

		}
		
		//Override
		/*
		ctrl.data.saveSuccesResolve = saveSuccessResolve;
		ctrl.data.cancelResolve = cancelResolve;
		
		function saveSuccessResolve(obj){
			stUtil.showMessage("","Salvo com sucesso!");
			obj.$mdDialog.hide();
			$route.reload();
		}
		
		function cancelResolve(){
			
		}
		*/

		//Inicializa a lista de objetos
		ctrl.data.getList();

	}

})();
