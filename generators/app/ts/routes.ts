/// <reference path="app.ts" />

module App{
    
    // Extend the IStateParamsService interface to include your own custom state param names throughout your project.
    export interface IAppParams extends angular.ui.IStateParamsService {
        id: number; // for example, pass some ID of a table row in the route
    }
    
    /**
     * Routes Class
     * We use Angular UI Router which is the defacto solution to routing in Angular.
     * For documentation, visit https://github.com/angular-ui/ui-router
     */
    class Routes{
        
        static $inject = ['$stateProvider', '$urlRouterProvider'];
        
        menu = {
            templateUrl: 'templates/menu.html',
            controller: 'menuCtrl',
            controllerAs: 'vm',
            resolve: {
                menuItems: function(){
                    // Inject the Angular UI route names into the main menu for navigation.
                    return [
                        {routeName: 'root.home', displayName: 'Home'},
                        {routeName: 'root.home.view1', displayName: 'View 1'}
                    ];
                }
            }    
        };
        
        footer = {
            templateUrl: 'templates/footer.html',
            controller: 'footerCtrl',
            controllerAs: 'vm',
            resolve: {
                data: function(){
                    return {
                        organization: 'Your Organization Name'
                    };
                }
            }    
        };
        
        constructor($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider){
            
            var self = this;

            $urlRouterProvider.otherwise('/');
            
            // The parent/root state of all other child states.
            // With `abstract` set to `true`, this state can't be explicitly activated.
            $stateProvider.state('root', {
                abstract: true,
                url: '/',
                templateUrl: 'templates/root.html',
                controller: 'rootCtrl',
                controllerAs: 'vm'              
            })
            
            // Use a dot (.) within a state name to declare a child state of a parent state.
            .state('root.home', {
                url: '', //The default view; use same URL as parent.

                views: {
                    // The Menu view. You can re-use views throughout your routes.
                    // You can specify the ui-view element to target with `@`. 
                    // In this case `<div ui-view="menu"></div>` is located in the root/root.html template of the Root state.
                    'menu@root': self.menu,
                    
                    'content@root': {
                        templateUrl: 'templates/home.html',
                        controller: 'homeCtrl',
                        controllerAs: 'vm',
                        // Inject data into the controller with the resolve property.
                        // This example inject an arbitray data object but you could also inject async data from a remote source. 
                        // If injecting async data into your controller, the return type will be of type Promise (IPromise).
                        resolve: {
                            data: function(){
                                return {
                                    title: 'TypeScript-Angular Home View',
                                    message: 'You can inject data into your controller via the &quot;resolve&quot; property of the UI Router state.'
                                };
                            }
                        }
                    }
                    
                    // Footer view
                    , 'footer@root': self.footer
                }
            })
            
            .state('root.home.view1', {
                url: '/view1',
                
                views: {
                    'content@root': {
                        templateUrl: 'templates/view1.html',
                        controller: 'view1Ctrl',
                        controllerAs: 'vm',
                        resolve: {
                            data: function(){
                                return {
                                    title: 'TypeScript-Angular View 1 Example',
                                    message: 'You can inject data into your controller via the &quot;resolve&quot; property of the UI Router state.'
                                };
                            }
                        }
                    }
                }
            })
            
            /* end $stateProvider. */;
            
        }
        
    }
    
    angular.module('app.routes', ['ui.router']) 
        .config(Routes);
    
}