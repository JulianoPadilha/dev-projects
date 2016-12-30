'use strict';

app.controller('AuthCtrl', function(Auth, $scope){
	$scope.registraUsuario = function(user) {
		Auth.register(user).then(function(){
			console.log("Usuário registrado!");
		}, function(err){
			console.log("Erro.. ", err);
		});
	},

	$scope.loginUsuario = function(user) {
		Auth.login(user).then(function(){
			console.log("Login realizado com sucesso");
			window.location = 'dashboard.html';
		}, function(err){
			console.log("Erro.. ", err);
		});
	}
});