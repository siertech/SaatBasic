angular.module('stapiApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/helloworld/html/helloworldDetalhe.html',
    "<meta charset=\"UTF-8\"><st-detalhe save-function=\"$helloworldDetalheCtrl.data.saveFunction($helloworldDetalheCtrl.data.item)\" delete-function=\"$helloworldDetalheCtrl.data.deleteFunction($helloworldDetalheCtrl.data.item)\" item=\"$helloworldDetalheCtrl.data.item\" cancel-function=\"$helloworldDetalheCtrl.data.cancelFunction()\" loading=\"$helloworldDetalheCtrl.data.loading\" title=\"{{$helloworldDetalheCtrl.data.item.descricao || 'Cadastro de novo Item'}}\"><helloworld-form></helloworld-form></st-detalhe>"
  );


  $templateCache.put('app/helloworld/html/helloworldForm.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" class=\"md-block\" layout-wrap><st-input-string flex=\"50\" flex-xs=\"100\" label=\"Descrição\" ng-model=\"$helloworldDetalheCtrl.data.item.descricao\"></st-input-string></div>"
  );


  $templateCache.put('app/helloworld/html/helloworldGridView.html',
    "<meta charset=\"UTF-8\"><div layout=\"row\" layout-wrap flex><div flex=\"25\" flex-xs=\"100\" flex-sm=\"50\" ng-repeat=\"item in $helloworldListCtrl.data.objetos\"><st-grid-item icon=\"sentiment_very_satisfied\" item=\"item\" label=\"{{item.descricao}}\" delete-function=\"$helloworldListCtrl.data.deleteFunction([item.id])\" open-detail=\"$helloworldListCtrl.data.openDetail(item)\"></st-grid-item></div></div>"
  );


  $templateCache.put('app/helloworld/html/helloworldList.html',
    "<meta charset=\"UTF-8\"><md-card style=\"padding-top: 15px\"><md-toolbar class=\"md-table-toolbar md-default\"><div layout=\"row\" class=\"md-toolbar-tools\" layout-wrap><div flex=\"20\" hide-xs md-hide-xs><md-button class=\"add-button md-raised\" ng-click=\"$helloworldListCtrl.data.openDetail()\" class=\"md-raised\">Cadastrar</md-button></div><st-filter flex-xs=\"80\" flex=\"60\" query-options=\"$helloworldListCtrl.data.requestListParams\" get-list=\"$helloworldListCtrl.data.getList\" filtros=\"$helloworldListCtrl.data.filtros\"></st-filter><view-chose flex=\"10\" view-type=\"config.confs.viewType\"></view-chose></div></md-toolbar></md-card><float-button-add class=\"float-add-button\" tooltip-label=\"Cadastrar novo helloworld\" ng-click=\"$helloworldListCtrl.data.openDetail()\"></float-button-add><div layout=\"row\" style=\"margin:8px\"><md-progress-linear flex ng-if=\"$helloworldListCtrl.data.loading===true\" md-mode=\"indeterminate\"></md-progress-linear></div><st-selected-items-actions delete-function=\"$helloworldListCtrl.data.deleteFunction($helloworldListCtrl.data.getSelectedItemsIds())\" selected-items=\"$helloworldListCtrl.data.selectedItems\"></st-selected-items-actions><helloworld-grid-view ng-show=\"config.confs.viewType=='grid'\"></helloworld-grid-view><helloworld-table-view ng-show=\"config.confs.viewType=='table'\"></helloworld-table-view><div ng-if=\"$helloworldListCtrl.data.objetos.length==0\"><p class=\"text-muted\">Nenhum item encontrado</p></div><st-filter-pagination total-itens=\"$helloworldListCtrl.data.totalItens\" itens-in-page=\"$helloworldListCtrl.data.objetos.length\" get-list=\"$helloworldListCtrl.data.getList\" query-options=\"$helloworldListCtrl.data.requestListParams\"></st-filter-pagination>"
  );


  $templateCache.put('app/helloworld/html/helloworldTableView.html',
    "<meta charset=\"UTF-8\"><st-table columns=\"$helloworldListCtrl.data.tableColumns\" open-detail=\"$helloworldListCtrl.data.openDetail\" order-by=\"$helloworldListCtrl.data.orderBy\" delete-function=\"$helloworldListCtrl.data.deleteFunction\" selected-items=\"$helloworldListCtrl.data.selectedItems\" items=\"$helloworldListCtrl.data.objetos\" edit-column=\"$helloworldListCtrl.data.editColumn\"></st-table>"
  );


  $templateCache.put('app/inicio/html/inicio.html',
    "<meta charset=\"UTF-8\"><md-content layout=\"row\" layout-align=\"center center\"><h2>Hello World!</h2></md-content>"
  );


  $templateCache.put('app/login/html/cadastroUsuario.html',
    "<meta charset=\"UTF-8\"><vertical-space></vertical-space><div><div class=\"col-lg-2 only-desktop\"></div><div class=\"panel panel-body col-lg-8\"><h2 class=\"text-center text-muted\">Parabéns <strong>{{lead.nome}}</strong> <i class=\"fa fa-smile-o\" aria-hidden=\"true\"></i></h2><p class=\"text-center\"><img ng-src=\"ceasaplus-onboard.png\"></p><h4 class=\"text-center\"><i class=\"fa fa-refresh faa-spin animated\" aria-hidden=\"true\"></i> Aguarde enquanto seu banco de dados na nuvem é configurado.</h4></div><div class=\"col-lg-2 only-desktop\"></div></div>"
  );


  $templateCache.put('app/login/html/login.html',
    "<meta charset=\"UTF-8\"><section layout=\"row\" flex layout-align-md=\"center center\"><span flex></span><md-card flex-gt-md=\"50\" flex-xs=\"100\"><md-toolbar layout=\"row\" layout-align=\"center center\"><div><div class=\"md-headline md-padding\">Entrar no sistema</div></div></md-toolbar><md-card-content><form name=\"login\"><md-input-container class=\"md-block\"><label for=\"empresa\">Empresa</label><input name=\"empresa\" ng-model=\"$loginCtrl.login.empresa\" required></md-input-container><md-input-container class=\"md-block\"><label for=\"usuario\">Usuário</label><input name=\"usuario\" ng-model=\"$loginCtrl.login.usuario\" required></md-input-container><md-input-container class=\"md-block\"><label for=\"password\">Senha</label><input type=\"password\" name=\"password\" ng-model=\"$loginCtrl.login.senha\" required></md-input-container><md-input-container class=\"md-block\"><div layout=\"row\" layout-align=\"center center\"><md-button ng-disabled=\"$loginCtrl.loading==true\" ng-click=\"$loginCtrl.logar($loginCtrl.login,$loginCtrl.lembrarSenha)\" class=\"md-raised md-accent\" flex=\"100\">Login</md-button></div></md-input-container></form></md-card-content></md-card><span flex></span></section>"
  );


  $templateCache.put('app/menu/html/menu.html',
    "<meta charset=\"UTF-8\"><div ng-show=\"$menuCtrl.data.showMenu\" ng-controller=\"menuCtrl as $menuCtrl\"><md-toolbar md-truncate layout=\"row\" class=\"md-toolbar-tools\"><div class=\"md-toolbar-tools\"><md-button md-colors=\"{color: 'orange'}\" ng-click=\"$menuCtrl.data.toggleSideNav()\" class=\"md-icon-button md-raised\" aria-label=\"Settings\"><ng-md-icon icon=\"menu\"></ng-md-icon></md-button><md-divider></md-divider><h2 md-truncate>Saat's Hello World</h2><span flex=\"10\"></span><st-breadcumb hide show-gt-xs></st-breadcumb><span flex></span></div></md-toolbar><md-sidenav class=\"md-sidenav\" md-component-id=\"side-nav-principal\" md-disable-backdrop md-whiteframe=\"4\"><md-toolbar layout=\"row\"><div class=\"md-toolbar-tools\"><h2>Opções</h2><span flex></span><md-button class=\"md-icon-button\" aria-label=\"Close Side Panel\" ng-click=\"$menuCtrl.data.toggleSideNav()\"><md-tooltip>Fechar</md-tooltip><ng-md-icon icon=\"close\"></ng-md-icon></md-button></div></md-toolbar><md-list class=\"menu-items\"><md-list-item ng-repeat=\"item in $menuCtrl.data.menuItems\" ng-click=\"$menuCtrl.data.changePath(item.path)\"><div class=\"inset\"><ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon></div><div class=\"inset\">{{item.label}}</div></md-list-item><md-divider></md-divider><md-list-item ng-click=\"$menuCtrl.data.openConfig()\"><div class=\"inset\"><ng-md-icon icon=\"settings\"></ng-md-icon></div><div class=\"inset\">Configurações</div></md-list-item><md-list-item class=\"button-logout\" ng-click=\"$menuCtrl.data.logOut()\"><div class=\"inset\"><ng-md-icon icon=\"logout\"></ng-md-icon></div><div class=\"inset\">Sair</div></md-list-item></md-list></md-sidenav></div>"
  );

}]);
