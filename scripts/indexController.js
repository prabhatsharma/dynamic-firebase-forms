'use strict';

app.controller('indexController', function($scope, firebaseAPI) {
    var forms = new Firebase(firebaseAPI.baseUrl);
    
    $scope.forms = {}
    
    forms.on('child_added', function getFirebaseData(data) {
        $scope.forms = data.val();
        
        $scope.$apply();    //This is pain javascript callback and outside angular scope. so run manual
        
        console.log('Form list is : ' , $scope.forms);
    })
})