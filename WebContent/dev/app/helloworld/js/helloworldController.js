"use strict";
(function(){

	angular.module("stapiApp")
	.controller("helloworldDetalheCtrl", helloworldDetalheCtrl)
	.controller("helloworldListCtrl", helloworldListCtrl);

	var objectName = "HelloWorld";

	function helloworldDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function helloworldListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/helloworld/html/helloworldDetalhe.html",
			detalheController: "helloworldDetalheCtrl",
			detalheControllerAs: "$helloworldDetalheCtrl",
			filtros:  [ 
				{attr:'descricao', label: 'Descrição'}

				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "Descrição", attr: "descricao", orderBy: true, labelIcon: "sentiment_very_satisfied"}
			
		];
		
		ctrl.data.orderBy = "descricao";
		
		//Objeto que define as opções para listagem dos itens
		ctrl.data.requestListParams = {	
				objectName: objectName,
				maxItensPerPage: config.confs.maxItemsPerPage || 9,

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
