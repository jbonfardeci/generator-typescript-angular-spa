var App;
(function (App) {
    var DataContext = (function () {
        function DataContext($http, $q, $state) {
            this.$http = $http;
            this.$q = $q;
            this.$state = $state;
        }
        DataContext.prototype.getData = function () {
            return this.$http.get('<some-service-url>');
        };
        DataContext.Id = 'datacontext';
        return DataContext;
    }());
    angular.module('app.services', [])
        .factory(DataContext.Id, ['$http', '$q', '$state', function ($http, $q, $state) {
            return new DataContext($http, $q, $state);
        }]);
})(App || (App = {}));
var App;
(function (App) {
    angular.module('app', ['app.controllers', 'app.routes', 'app.services', 'app.directives', 'ui.router', 'ngSanitize'])
        .run(['$rootScope', '$state', '$stateParams', run]);
    function run($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
})(App || (App = {}));
var App;
(function (App) {
    var MenuCtrl = (function () {
        function MenuCtrl(menuItems) {
            this.menuItems = menuItems;
            this.menuItems = this.menuItems || [];
        }
        MenuCtrl.Id = 'menuCtrl';
        MenuCtrl.$inject = ['menuItems'];
        return MenuCtrl;
    }());
    App.MenuCtrl = MenuCtrl;
    var FooterCtrl = (function () {
        function FooterCtrl(data) {
            this.data = data;
            this.year = new Date().getFullYear();
            this.organization = data.organization;
        }
        FooterCtrl.Id = 'footerCtrl';
        FooterCtrl.$inject = ['data'];
        return FooterCtrl;
    }());
    App.FooterCtrl = FooterCtrl;
    var RootCtrl = (function () {
        function RootCtrl($scope) {
            this.$scope = $scope;
        }
        RootCtrl.Id = 'rootCtrl';
        RootCtrl.$inject = ['$scope'];
        return RootCtrl;
    }());
    var HomeCtrl = (function () {
        function HomeCtrl($scope, $state, datacontext, data) {
            this.$scope = $scope;
            this.$state = $state;
            this.datacontext = datacontext;
            this.data = data;
            this.title = data.title;
            this.message = data.message;
        }
        HomeCtrl.Id = 'homeCtrl';
        HomeCtrl.$inject = ['$scope', '$state', 'datacontext', 'data'];
        return HomeCtrl;
    }());
    var View1Ctrl = (function () {
        function View1Ctrl($scope, $state, datacontext, data) {
            this.$scope = $scope;
            this.$state = $state;
            this.datacontext = datacontext;
            this.data = data;
            this.title = data.title;
            this.message = data.message;
        }
        View1Ctrl.Id = 'view1Ctrl';
        View1Ctrl.$inject = ['$scope', '$state', 'datacontext', 'data'];
        return View1Ctrl;
    }());
    angular.module('app.controllers', [])
        .controller(RootCtrl.Id, RootCtrl)
        .controller(MenuCtrl.Id, MenuCtrl)
        .controller(FooterCtrl.Id, FooterCtrl)
        .controller(HomeCtrl.Id, HomeCtrl)
        .controller(View1Ctrl.Id, View1Ctrl);
})(App || (App = {}));
var App;
(function (App) {
    angular.module('app.directives', [])
        .directive('someDirective', ['$interval', someDirective]);
    function someDirective($interval) {
        return {
            restrict: 'EA',
            scope: {},
            link: function (scope, element, attr, ctrl) {
            },
            template: ''
        };
    }
})(App || (App = {}));
var App;
(function (App) {
    var Routes = (function () {
        function Routes($stateProvider, $urlRouterProvider) {
            this.menu = {
                templateUrl: 'templates/menu.html',
                controller: 'menuCtrl',
                controllerAs: 'vm',
                resolve: {
                    menuItems: function () {
                        return [
                            { routeName: 'root.home', displayName: 'Home' },
                            { routeName: 'root.home.view1', displayName: 'View 1' }
                        ];
                    }
                }
            };
            this.footer = {
                templateUrl: 'templates/footer.html',
                controller: 'footerCtrl',
                controllerAs: 'vm',
                resolve: {
                    data: function () {
                        return {
                            organization: 'Your Organization Name'
                        };
                    }
                }
            };
            var self = this;
            $urlRouterProvider.otherwise('/');
            $stateProvider.state('root', {
                abstract: true,
                url: '/',
                templateUrl: 'templates/root.html',
                controller: 'rootCtrl',
                controllerAs: 'vm'
            })
                .state('root.home', {
                url: '',
                views: {
                    'menu@root': self.menu,
                    'content@root': {
                        templateUrl: 'templates/home.html',
                        controller: 'homeCtrl',
                        controllerAs: 'vm',
                        resolve: {
                            data: function () {
                                return {
                                    title: 'TypeScript-Angular Home View',
                                    message: 'You can inject data into your controller via the &quot;resolve&quot; property of the UI Router state.'
                                };
                            }
                        }
                    },
                    'footer@root': self.footer
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
                            data: function () {
                                return {
                                    title: 'TypeScript-Angular View 1 Example',
                                    message: 'You can inject data into your controller via the &quot;resolve&quot; property of the UI Router state.'
                                };
                            }
                        }
                    }
                }
            });
        }
        Routes.$inject = ['$stateProvider', '$urlRouterProvider'];
        return Routes;
    }());
    angular.module('app.routes', ['ui.router'])
        .config(Routes);
})(App || (App = {}));
