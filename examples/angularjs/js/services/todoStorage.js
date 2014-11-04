
angular.module('todomvc')
	.factory('todoStorage', ['$http', function($http) {
		'use strict';

var sData = {
	title:"hello w",
	completed:false
};


		//var STORAGE_ID = 'todos-angularjs';

		return {
			get: function ($scope) {
				return $http.get('http://localhost:9000/').success(function(data, status, headers, config){
					$scope.todos = data;
					//console.log($scope.todos);
					return data;
				});
				//alert(typeof data);
				//return data;
			},
	
		put: function (todos) {
		    //console.log(todos);
        $http({
            method: 'POST',
            url: 'http://localhost:9000/push',
            data: JSON.stringify(todos),
            //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    }};
    
	} ]);