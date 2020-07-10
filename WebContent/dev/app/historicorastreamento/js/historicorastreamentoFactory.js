"use strict";
(function(){

	angular.module("stapiApp")

	.factory("historicorastreamentoUtil", historicorastreamentoUtil);

	function historicorastreamentoUtil(){

		_getControllerOptions = function(){
			return{
				detalheController: "historicorastreamentoDetalheCtrl",
				listController: "historicorastreamentoListCtrl",
				detalheTemplateUrl:"app/historicorastreamento/html/historicorastreamentoDetalhe.html",
				listTemplateUrl:"app/historicorastreamento/html/historicorastreamentoDetalhe.html",
				detalheControllerAs: "$historicorastreamentoDetalheCtrl",
			}
		}
		
		return: {
			
			
		}

	}

})();
