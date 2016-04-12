/// <reference path="app.ts" />

module App{
    
    export class MenuCtrl{
        
        static Id: string = 'menuCtrl';
        static $inject = ['menuItems'];
        
        constructor(private menuItems: Array<any>){
            this.menuItems = this.menuItems || [];
        }
        
    }
    
    export class FooterCtrl{
        
        static Id: string = 'footerCtrl';
        static $inject = ['data'];
        
        organization: string;       
        year: number;
        
        constructor(private data: any){
            this.year = new Date().getFullYear();
            this.organization = data.organization;
        }
        
    }

    class RootCtrl{
        
        static Id: string = 'rootCtrl';
        static $inject = ['$scope'];
        
        constructor(private $scope: angular.IScope){
            
        }
        
    }
    
    class HomeCtrl{
        
        static Id: string = 'homeCtrl';
        static $inject = ['$scope', '$state', 'datacontext', 'data'];
        
        title: string;
        message: string;
        
        constructor(private $scope: angular.IScope, private $state: angular.ui.IState, private datacontext: IDataContext, private data: any){
            this.title = data.title;
            this.message = data.message;
        }
        
    }
    
    class View1Ctrl{
        
        static Id: string = 'view1Ctrl';
        static $inject = ['$scope', '$state', 'datacontext', 'data'];
        
        title: string;
        message: string;
        
        constructor(private $scope: angular.IScope, private $state: angular.ui.IState, private datacontext: IDataContext, private data: any){
            this.title = data.title;
            this.message = data.message;
        }
        
    }
    
    // Controllers module for Angular app
    angular.module('app.controllers', [])
        .controller(RootCtrl.Id, RootCtrl)
        .controller(MenuCtrl.Id, MenuCtrl)
        .controller(FooterCtrl.Id, FooterCtrl)
        .controller(HomeCtrl.Id, HomeCtrl)
        .controller(View1Ctrl.Id, View1Ctrl)
        
    ;

}