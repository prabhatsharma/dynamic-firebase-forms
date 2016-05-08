'use strict'

var app = angular.module("app", ["ui.router", "schemaForm", "ui.bootstrap"])

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home")
    
    $stateProvider.state("home", {url : "/home", templateUrl : "views/home.html" })
    $stateProvider.state("home.forms", {url : "/forms/{formName}", template : "<dynamic-form></dynamic-form>" })
    $stateProvider.state("admin", {url : "/admin", templateUrl : "views/admin.html" })
})