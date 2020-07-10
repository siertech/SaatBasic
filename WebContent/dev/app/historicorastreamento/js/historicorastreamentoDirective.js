"use strict";
(function(){

	angular.module("stapiApp")

	.directive("historicorastreamentoGridView", historicorastreamentoGridView)
	.directive("historicorastreamentoTableView", historicorastreamentoTableView)
	.directive("historicorastreamentoList", historicorastreamentoList)
	.directive("historicorastreamentoDetalhe", historicorastreamentoList)
	.directive("historicorastreamentoForm", historicorastreamentoForm);
	
	function historicorastreamentoDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/historicorastreamento/html/historicorastreamentoDetalhe.html",
			controller: "historicorastreamentoDetalheCtrl",
			controllerAs:"$historicorastreamentoDetalheCtrl"

		};

	}
	
	function historicorastreamentoList(){

		return {

			restrict:"E",
			templateUrl:"app/historicorastreamento/html/historicorastreamentoList.html",
			bindToController: true,
			controller: "historicorastreamentoListCtrl",
			controllerAs:"$historicorastreamentoListCtrl",
			scope:{
				fixProperties: "<",
				hideFilter: "<",
				hidePagination: "<",
				hideButtonAdd: "<"
			}

		};

	}

	function historicorastreamentoGridView(){

		return {

			restrict:"E",
			templateUrl:"app/historicorastreamento/html/historicorastreamentoGridView.html"

		};

	}

	function historicorastreamentoTableView(){

		return {

			restrict:"E",
			templateUrl:"app/historicorastreamento/html/historicorastreamentoTableView.html"
			
		};

	}

	function historicorastreamentoForm(){

		return {

			restrict:"E",
			templateUrl:"app/historicorastreamento/html/historicorastreamentoForm.html"
			
		};

	}

})();
