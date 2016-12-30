'use strict';

var app = angular.module('starter', [
	'firebase',
]);

app.controller('ItensCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
	var ref = new Firebase('https://appangularjs.firebaseio.com/');
	$scope.itens = $firebaseArray(ref);

	$scope.addItem = function(){
		$scope.itens.$add({
			name: $scope.name
		});
		console.log("Adicionado");
	};
}]);

// app.constant('FURL', );
