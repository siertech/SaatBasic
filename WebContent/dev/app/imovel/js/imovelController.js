"use strict";
(function(){

	angular.module("stapiApp")
	.controller("imovelDetalheCtrl", imovelDetalheCtrl)
	.controller("imovelListCtrl", imovelListCtrl);

	var objectName = "Imovel";

	function imovelDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function imovelListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListControl', {
			$scope: $scope,
			options: {
				objectName: objectName,
				detalheTemplateUrl:"app/imovel/html/imovelDetalhe.html",
				detalheController: "imovelDetalheCtrl",
				detalheControllerAs: "$imovelDetalheCtrl",
				fixProperties: ctrl.fixProperties || {}
			},
			filtros:  [ 
				{attr:'codigoCef', label: ' Buscar pelo codigoCef '}

				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "", attr: "codigoCef", orderBy: true, labelIcon: ""}
			
		];
	
		ctrl.data.orderBy = "codigoCef";
		
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
