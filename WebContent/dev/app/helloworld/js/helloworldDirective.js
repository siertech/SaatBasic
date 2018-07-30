"use strict";
(function(){

	angular.module("stapiApp")

	.directive("helloworldGridView", helloworldGridView)
	.directive("helloworldTableView", helloworldTableView)
	.directive("helloworldList", helloworldList)
	.directive("helloworldDetalhe", helloworldList)
	.directive("helloworldForm", helloworldForm);
	
	function helloworldDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/helloworld/html/helloworldDetalhe.html",
			controller: "helloworldDetalheCtrl",
			controllerAs:"$helloworldDetalheCtrl"

		};

	}
	
	function helloworldList(){

		return {

			restrict:"E",
			templateUrl:"app/helloworld/html/helloworldList.html",
			controller: "helloworldListCtrl",
			controllerAs:"$helloworldListCtrl"

		};

	}

	function helloworldGridView(){

		return {

			restrict:"E",
			templateUrl:"app/helloworld/html/helloworldGridView.html"

		};

	}

	function helloworldTableView(){

		return {

			restrict:"E",
			templateUrl:"app/helloworld/html/helloworldTableView.html"
			
		};

	}

	function helloworldForm(){

		return {

			restrict:"E",
			templateUrl:"app/helloworld/html/helloworldForm.html"
			
		};

	}

})();
