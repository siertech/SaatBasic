"use strict";
(function(){

	angular.module("stapiApp")

	.directive("testGridView", testGridView)
	.directive("testTableView", testTableView)
	.directive("testList", testList)
	.directive("testDetalhe", testList)
	.directive("testForm", testForm);
	
	function testDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/test/html/testDetalhe.html",
			controller: "testDetalheCtrl",
			controllerAs:"$testDetalheCtrl"

		};

	}
	
	function testList(){

		return {

			restrict:"E",
			templateUrl:"app/test/html/testList.html",
			bindToController: true,
			controller: "testListCtrl",
			controllerAs:"$testListCtrl",
			scope:{
				fixProperties: "<",
				hideFilter: "<",
				hidePagination: "<",
				hideButtonAdd: "<"
			}

		};

	}

	function testGridView(){

		return {

			restrict:"E",
			templateUrl:"app/test/html/testGridView.html"

		};

	}

	function testTableView(){

		return {

			restrict:"E",
			templateUrl:"app/test/html/testTableView.html"
			
		};

	}

	function testForm(){

		return {

			restrict:"E",
			templateUrl:"app/test/html/testForm.html"
			
		};

	}

})();
