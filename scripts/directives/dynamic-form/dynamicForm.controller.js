"use strict";

angular.module("app").controller("dynamicController", function ($scope, $stateParams) {
	
	console.log("Dynamic parameter is : ", $stateParams)
	$scope.formName = $stateParams.formName
	
	$scope.sf = {};
	
	$scope.sf.schema = {
		type: "object",
		properties: {
			name: { type: "string", minLength: 2, title: "Name", description: "Name or alias" },
			title: {
				type: "string",
				enum: ['dr', 'jr', 'sir', 'mrs', 'mr', 'NaN', 'dj']
			}
		}
	};

	$scope.sf.form = [
		"*",
		{
			type: "submit",
			title: "Save"
		}
	];

	$scope.sf.model = {};

})