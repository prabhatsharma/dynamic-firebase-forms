'use strict';

app.controller('adminFormController', function($scope, $stateParams, firebaseAPI, $firebaseObject) {
    console.log("Admin Form ", $stateParams)
    $scope.formName = $stateParams.formName
    
    var form = new Firebase(firebaseAPI.baseUrl + "/forms/" + $scope.formName);
    
    $scope.form = $firebaseObject(form)

	$scope.form.$loaded().then(function () {		
		$scope.newSchema = $scope.form.schema;
		$scope.newForm = $scope.form.form;
	})
    
    $scope.updateForm = function(formName, formTitle, newSchema, newForm) {
        console.log(formName + ", " + formTitle)
    }
})