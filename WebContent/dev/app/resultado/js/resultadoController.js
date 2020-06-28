"use strict";
(function(){

	angular.module("stapiApp")
	.controller("resultadoDetalheCtrl", resultadoDetalheCtrl)
	.controller("resultadoListCtrl", resultadoListCtrl);

	var objectName = "Resultado";

	function resultadoDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function resultadoListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListControl', {
			$scope: $scope,
			options: {
				objectName: objectName,
				detalheTemplateUrl:"app/resultado/html/resultadoDetalhe.html",
				detalheController: "resultadoDetalheCtrl",
				detalheControllerAs: "$resultadoDetalheCtrl",
				fixProperties: ctrl.fixProperties || {}
			},
			filtros:  [ 
				{attr:'label_', label: ' Buscar pelo label_ '}

				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "", attr: "label_", orderBy: true, labelIcon: ""}
			
		];
	
		ctrl.data.orderBy = "label_";
		
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
