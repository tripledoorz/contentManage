/**
 * Created by Administrator on 2016/9/24.
 */
/*
 * 配置路由文件
 * 全局变量
 * 全局方法
 * */
var app = angular.module('myApp',['ui.router','ng.service']).config(function($stateProvider,$urlRouterProvider) {
    $stateProvider.state("home",{
        url:"/home",
        templateUrl:'views/home.html',
        controller:"homeCtrl"
    }).state("home.user",{
        url:"/user",
        views:{
            "main":{
                templateUrl:'views/user.html',
                controller:"userCtrl"
            }
        }
    }).state("home.shop",{
        url:"/shop",
        views: {
            "main":{
                templateUrl:'views/shop.html',
                controller:"roleCtrl"
            }
        }
    }).state("home.role",{
        url:"/role",
        views: {
            "main":{
                templateUrl:'views/role.html',
                controller:"roleCtrl"
            }
        }
    }).state("home.power",{
        url:"/power",
        views: {
            "main":{
                templateUrl:'views/power.html',
                controller:"roleCtrl"
            }
        }
    }).state("home.szie",{
        url:"/size",
        views: {
            "main":{
                templateUrl:'views/size.html',
                controller:"roleCtrl"
            }
        }
    }).state("home.page",{
        url:"/page",
        views: {
            "main":{
                templateUrl:'views/page.html',
                controller:"roleCtrl"
            }
        }
    }).state("home.color",{
        url:"/color",
        views: {
            "main":{
                templateUrl:'views/color.html',
                controller:"roleCtrl"
            }
        }
    })
    $urlRouterProvider.otherwise('/home');
});