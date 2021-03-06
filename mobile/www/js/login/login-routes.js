(function () {
  'use strict';

  angular
    .module('login')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'login/login.tpl.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      });
  }
}());

//# sourceMappingURL=../login/login-routes.js.map