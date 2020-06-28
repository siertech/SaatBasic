"use strict";
(function(){

	angular.module("stapiApp")

	.directive("imovelGridView", imovelGridView)
	.directive("imovelTableView", imovelTableView)
	.directive("imovelList", imovelList)
	.directive("imovelDetalhe", imovelList)
	.directive("imovelForm", imovelForm);
	
	function imovelDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/imovel/html/imovelDetalhe.html",
			controller: "imovelDetalheCtrl",
			controllerAs:"$imovelDetalheCtrl"

		};

	}
	
	function imovelList(){

		return {

			restrict:"E",
			templateUrl:"app/imovel/html/imovelList.html",
			bindToController: true,
			controller: "imovelListCtrl",
			controllerAs:"$imovelListCtrl",
			scope:{
				fixProperties: "<",
				hideFilter: "<",
				hidePagination: "<",
				hideButtonAdd: "<"
			}

		};

	}

	function imovelGridView(){

		return {

			restrict:"E",
			templateUrl:"app/imovel/html/imovelGridView.html"

		};

	}

	function imovelTableView(){

		return {

			restrict:"E",
			templateUrl:"app/imovel/html/imovelTableView.html"
			
		};

	}

	function imovelForm(){

		return {

			restrict:"E",
			templateUrl:"app/imovel/html/imovelForm.html"
			
		};

	}

})();
