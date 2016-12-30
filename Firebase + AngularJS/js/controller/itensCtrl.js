'use strict';

app.controller('ItensCtrl', function($scope, Itens){
	$scope.button = function(item) {
		console.log("button was clicked", item);
		Itens.saveItens(item);
	}

	$scope.itens = Itens.all();
});