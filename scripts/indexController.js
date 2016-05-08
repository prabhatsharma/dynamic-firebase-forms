'use strict';

app.controller('indexController', function($scope, firebaseAPI, $firebaseObject) {
    var forms = new Firebase(firebaseAPI.baseUrl + "/forms");
    
    $scope.forms = $firebaseObject(forms);
    
})