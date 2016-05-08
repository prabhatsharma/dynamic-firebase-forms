'use strict';

app.controller('adminFormController', function($scope, $stateParams) {
    console.log("Admin Form ", $stateParams)
    $scope.formName = $stateParams.formName
    
    $scope.createForm = function(formName, formTitle) {
        console.log(formName + ", " + formTitle)
    }
})