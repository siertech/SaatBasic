"use strict";
(function(){

	angular.module("stapiApp")

	.directive("resultadoGridView", resultadoGridView)
	.directive("resultadoTableView", resultadoTableView)
	.directive("resultadoList", resultadoList)
	.directive("resultadoDetalhe", resultadoList)
	.directive("resultadoForm", resultadoForm);
	
	function resultadoDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/resultado/html/resultadoDetalhe.html",
			controller: "resultadoDetalheCtrl",
			controllerAs:"$resultadoDetalheCtrl"

		};

	}
	
	function resultadoList(){

		return {

			restrict:"E",
			templateUrl:"app/resultado/html/resultadoList.html",
			bindToController: true,
			controller: "resultadoListCtrl",
			controllerAs:"$resultadoListCtrl",
			scope:{
				fixProperties: "<",
				hideFilter: "<",
				hidePagination: "<",
				hideButtonAdd: "<"
			}

		};

	}

	function resultadoGridView(){

		return {

			restrict:"E",
			templateUrl:"app/resultado/html/resultadoGridView.html"

		};

	}

	function resultadoTableView(){

		return {

			restrict:"E",
			templateUrl:"app/resultado/html/resultadoTableView.html"
			
		};

	}

	function resultadoForm(){

		return {

			restrict:"E",
			templateUrl:"app/resultado/html/resultadoForm.html"
			
		};

	}

})();
