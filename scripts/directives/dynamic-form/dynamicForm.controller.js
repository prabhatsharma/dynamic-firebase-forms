"use strict";

angular.module("app").controller("dynamicController", function ($scope, $stateParams, $firebaseObject, firebaseAPI) {

	$scope.formName = $stateParams.formName
	$scope.sf = {}

	var form = new Firebase(firebaseAPI.baseUrl + "/forms/" + $stateParams.formName);

	// download the data into a local object for 3 wa syncing between data, model and firebase
	$scope.sf = $firebaseObject(form);

	$scope.sf.$loaded().then(function () {		
		$scope.schema = JSON.parse($scope.sf.schema);
		$scope.form = JSON.parse($scope.sf.form);
	})

	$scope.model = {};
})