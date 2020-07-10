"use strict";
(function(){

	angular.module("stapiApp")
	.controller("rastreamentoDetalheCtrl", rastreamentoDetalheCtrl)
	.controller("rastreamentoListCtrl", rastreamentoListCtrl);

	var objectName = "Rastreamento";

	function rastreamentoDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		
		console.log("chegou no rastreamento detalhe");
		
		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function rastreamentoListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListControl', {
			$scope: $scope,
			options: {
				objectName: objectName,
				detalheTemplateUrl:"app/rastreamento/html/rastreamentoDetalhe.html",
				detalheController: "rastreamentoDetalheCtrl",
				detalheControllerAs: "$rastreamentoDetalheCtrl",
				fixProperties: ctrl.fixProperties || {}
			},
			filtros:  [ 
				{attr:'titulo', label: ' Buscar pelo titulo '}

				]
		}));
		
		ctrl.data.tableColumns = [
			
		    {label: "ID", attr: "id", orderBy: true, labelIcon: ""},
			{label: "Título do Rastreamento", attr: "titulo", orderBy: true, labelIcon: ""},
			{label: "Preço de", attr: "precoDe", orderBy: true, labelIcon: "", editable: true},
			{label: "Preço até", attr: "precoAte", orderBy: true, labelIcon: "", editable: true},
			{label: "Termo principal", attr: "termoPrincipal", orderBy: true, labelIcon: "", editable: true},
			{label: "Intervalo", attr: "intervalo", orderBy: true, labelIcon: "", editable: true},
			{label: "Termos negativos", attr: "termosNegativos", orderBy: true, labelIcon: "", editable: true},
			{label: "E-mails para notificar", attr: "emails", orderBy: true, labelIcon: "", editable: true},
			{label: "Link", attr: "linkResultados", orderBy: true, labelIcon: "", editable: true},
			{label: "Status de execução", attr: "statusExecucao", orderBy: true, labelIcon: "", editable: true},
			
		];
	
		ctrl.data.orderBy = "titulo";
		
		//Objeto que define as opções para listagem dos itens
		ctrl.data.requestListParams = {	
				objectName: objectName,
				maxItensPerPage: config.confs.maxItemsPerPage || 9

		}
		
		
		
		function saveSuccessResolve(obj){
			stUtil.showMessage("","Salvo com sucesso!");
			ctrl.data.getList();
		}
		ctrl.data.saveSuccesResolve = saveSuccessResolve;
		
		//Override
		/*
		
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
