'use strict'

var app = angular.module("app", ["ui.router", "schemaForm", "ui.bootstrap", "firebase"])

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home")
    
    $stateProvider.state("admin", {url : "/admin", templateUrl : "views/admin.html" })
    $stateProvider.state("admin.create", {url : "/create", templateUrl : "views/createForm.html" })
    $stateProvider.state("admin.forms", {url : "/forms/{formName}", templateUrl : "views/adminForm.html" })
    
    $stateProvider.state("home", {url : "/home", templateUrl : "views/home.html" })
    $stateProvider.state("home.forms", {url : "/forms/{formName}", template : "<dynamic-form></dynamic-form>" })
    
})