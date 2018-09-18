"use strict";
(function(){
var app;
try{
	app  = angular.module("stapiApp",["stapi"]);
}catch(e){
	window.alert(e);
}

app.factory('config',function(){

	return {
		  
		scope: "static",
		confs:{
				path: "SaatBasic",
				securityPaths: "all", //paths da aplicação onde a autenticação no sistema é necessária
				appVersion: "1.0",
				initialPath: "/helloworld",
				loginPath: "/login",
				notFoundPath:"/notfound",
				pathsToHideMenu: ["/login"] //Nos paths definidos aqui o menu não será exibido
		}
	}

});

})();

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

"use strict";
(function(){

	angular.module("stapiApp")

	.factory("helloworldUtil", helloworldUtil);

	function helloworldUtil($mdDialogstService, $q, $mdDialog, $mdMedia, stCrudToolsUtils){


	}

})();

"use strict";
(function(){
	angular.module("stapiApp") 
	.config(function($routeProvider, $httpProvider){

	//Rota para listagem dos objetos
	$routeProvider.when("/helloworld",{

		template:"<helloworld-list></helloworld-list>",
	    
	}); 

})

})();

"use strict";

(function(){

	angular.module("stapiApp")

	.controller("menuCtrl", menuCtrl);

	function menuCtrl($scope, $controller){

		var ctrl = this;
		ctrl.scope = $scope;

		var menuItems =  [
			
			{path: "inicio", icon:"home", label:"Início"},
			{path: "helloworld", icon:"sentiment_very_satisfied", label:"Hello World"}
			
			];

		angular.extend(ctrl, $controller('stMenuController', {
			$scope: $scope,
			menuItems: menuItems,
			sidenavId:  "side-nav-principal"
		}));


	}	

})();


"use strict";
(function(){
angular.module("stapiApp").config(function($routeProvider,$httpProvider){

	$routeProvider.when("/login",{

		templateUrl:"app/login/html/login.html",
		controller:"loginController",
		controllerAs: "$loginCtrl"
		
	});
	
	$routeProvider.when("/notfound",{

		template: "<p>Página não encontrada</p>"
	
	});
	
});

})();


"use strict";
(function(){
	angular.module("stapiApp").controller("loginController",function($scope, $location, $rootScope, $localStorage, $cookieStore, loginUtil, stUtil, config, $route){

		var ctrl = this;
		init();

		ctrl.lembrarSenhaUsuario = function(){
			loginUtil.openLembrarSenha();
		}

		ctrl.logar = function(login,lembrarSenha){

			if(!login.usuario){

				stUtil.showMessage("","Informe o Usuário","danger");
				return;
			}

			if(!login.senha){

				stUtil.showMessage("","Informe a senha","danger");
				return;
			}

			ctrl.loading=true;
			loginUtil.logar(login,lembrarSenha,function(loginData){

				ctrl.loading=false;

				if(loginData){

					var pathPostLogin = angular.copy($rootScope.pathPosLogin);
					delete $rootScope.pathPosLogin;
					$location.path(config.defaultRoute || "/inicio");

				}
				else{
					ctrl.login.senha = "";
					delete $localStorage.senha;
					stUtil.showMessage("","Ocorreu um erro ao realizar login, tente novamente","danger");
				}

			});
		}

		ctrl.logOut = function() {
			loginUtil.logOut();
			$location.path(config.confs.loginPath || "login");
		};

		function init(){

			ctrl.login = {
					empresa: $localStorage.empresa,
					usuario: $localStorage.usuario,
					senha: $localStorage.senha
			};
			ctrl.loading = false;
			ctrl.lembrarSenha = true;

			if(!$rootScope.usuarioSistema)
				$rootScope.usuarioSistema = $cookieStore.get("usuarioSistema");
		}

		if($localStorage.usuario && $localStorage.senha){
			ctrl.logar(ctrl.login, true);
		}

	})

})();

"use strict";
(function(){
	angular.module("stapiApp").controller("inicioController",function($scope){

	
	
	})

})();

"use strict";
(function(){
angular.module("stapiApp").config(function($routeProvider, $httpProvider){

	//Inicio
	$routeProvider.when("/inicio",{

		templateUrl:"app/inicio/html/inicio.html",
		controller:"inicioController",
		controllerAs: "$inicioCtrl"

	}); 

})
})();

