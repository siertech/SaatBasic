"use strict";
(function(){

	angular.module("stapiApp")
	.controller("historicorastreamentoDetalheCtrl", historicorastreamentoDetalheCtrl)
	.controller("historicorastreamentoListCtrl", historicorastreamentoListCtrl);

	var objectName = "HistoricoRastreamento";

	function historicorastreamentoDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		
		console.log("chegou no historicorastreamento detalhe");
		
		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function historicorastreamentoListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListControl', {
			$scope: $scope,
			options: {
				objectName: objectName,
				detalheTemplateUrl:"app/historicorastreamento/html/historicorastreamentoDetalhe.html",
				detalheController: "historicorastreamentoDetalheCtrl",
				detalheControllerAs: "$historicorastreamentoDetalheCtrl",
				fixProperties: ctrl.fixProperties || {}
			},
			filtros:  [ 
				{attr:'link', label: ' Buscar pelo link '}

				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "", attr: "link", orderBy: true, labelIcon: ""}
			
		];
	
		ctrl.data.orderBy = "link";
		
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
