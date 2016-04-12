/// <reference path="app.ts" />


module App{
    
    angular.module('app.directives', [])
    
        .directive('someDirective', ['$interval', someDirective])
    
    ;
    
    function someDirective($interval: angular.IIntervalService){
        return {
            restrict: 'EA',
            scope: {
                
            },
            link: function(scope, element, attr, ctrl){
                
            },
            template: ''
        };
    }
    
}