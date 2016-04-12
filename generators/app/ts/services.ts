/// <reference path="app.ts" />

module App {
    
    export interface IDataContext{
        getData(): angular.IPromise<any>;
    }
    
    /**
     * DataContext Class for All Data Methods
     */
    class DataContext implements IDataContext{
        
        static Id: string = 'datacontext';
        
        constructor(private $http: angular.IHttpService, private $q: angular.IQService, private $state: angular.ui.IStateProvider){
            
        }
        
        public getData(): angular.IPromise<any> {
            return this.$http.get('<some-service-url>');
        }
        
    }

    // Services Module for Angular App
    angular.module('app.services', [])
    
        .factory(DataContext.Id, ['$http', '$q', '$state', function ($http: angular.IHttpService, $q: angular.IQService, $state: angular.ui.IStateProvider) {
            return new DataContext($http, $q, $state);
        }])
        
    ;

}

