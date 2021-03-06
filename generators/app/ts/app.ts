/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-sanitize.d.ts" />
/// <reference path="../typings/angular-ui/angular-ui-router.d.ts" />
/// <reference path="services.ts" />

module App {
    
    // Extend the angular.IRootScopeService
    export interface IRootScope extends angular.IRootScopeService {
        $state: angular.ui.IState;
        $stateParams: angular.ui.IStateParamsService;
    }
    
    angular.module('app', ['app.controllers', 'app.routes', 'app.services', 'app.directives', 'ui.router', 'ngSanitize'])

        .run(['$rootScope', '$state', '$stateParams', run]);
        
    function run($rootScope: IRootScope, $state: angular.ui.IStateService, $stateParams: angular.ui.IStateParamsService): void {
            
        // Add references to $state and $stateParams to $rootScope so you can access them from any scope.    
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        
    }

}