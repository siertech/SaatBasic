"use strict";
(function(){

	angular.module("stapiApp")

	.factory("rastreamentoUtil", rastreamentoUtil);

	function rastreamentoUtil(){

		_getControllerOptions = function(){
			return{
				detalheController: "rastreamentoDetalheCtrl",
				listController: "rastreamentoListCtrl",
				detalheTemplateUrl:"app/rastreamento/html/rastreamentoDetalhe.html",
				listTemplateUrl:"app/rastreamento/html/rastreamentoDetalhe.html",
				detalheControllerAs: "$rastreamentoDetalheCtrl",
			}
		}
		
		return: {
			
			
		}

	}

})();
