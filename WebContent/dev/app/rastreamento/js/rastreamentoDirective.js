"use strict";
(function(){

	angular.module("stapiApp")

	.directive("rastreamentoGridView", rastreamentoGridView)
	.directive("rastreamentoTableView", rastreamentoTableView)
	.directive("rastreamentoList", rastreamentoList)
	.directive("rastreamentoDetalhe", rastreamentoList)
	.directive("rastreamentoForm", rastreamentoForm);
	
	function rastreamentoDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/rastreamento/html/rastreamentoDetalhe.html",
			controller: "rastreamentoDetalheCtrl",
			controllerAs:"$rastreamentoDetalheCtrl"

		};

	}
	
	function rastreamentoList(){

		return {

			restrict:"E",
			templateUrl:"app/rastreamento/html/rastreamentoList.html",
			bindToController: true,
			controller: "rastreamentoListCtrl",
			controllerAs:"$rastreamentoListCtrl",
			scope:{
				fixProperties: "<",
				hideFilter: "<",
				hidePagination: "<",
				hideButtonAdd: "<"
			}

		};

	}

	function rastreamentoGridView(){

		return {

			restrict:"E",
			templateUrl:"app/rastreamento/html/rastreamentoGridView.html"

		};

	}

	function rastreamentoTableView(){

		return {

			restrict:"E",
			templateUrl:"app/rastreamento/html/rastreamentoTableView.html"
			
		};

	}

	function rastreamentoForm(){

		return {

			restrict:"E",
			templateUrl:"app/rastreamento/html/rastreamentoForm.html"
			
		};

	}

})();
