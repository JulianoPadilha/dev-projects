'use strict';

var app = angular.module('starter', [
	'firebase',
	'ngRoute',
]);

app.constant('FURL', 'https://tavalendo.firebaseio.com/');

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'index.html'
	})

	$routeProvider.when('/cadastraMedicamento', {
		templateUrl: 'teste.html',
		controller: 'MedicamentoCtrl'
	});
});