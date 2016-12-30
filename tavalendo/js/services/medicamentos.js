'use strict';

app.factory('Medicamentos', function(FURL, $firebaseArray) {
	var ref = new Firebase(FURL);
	var medicamentos = $firebaseArray(ref);

	var Medicamentos = {

		listAllMedicamentos: function() {
			return medicamentos;
		},
		
		saveMedicamento: function(medicamento) {
			var newMedicamento = {
				nome: medicamento.nome,
				precoOriginal: medicamento.precoOriginal,
				precoDesconto: medicamento.precoDesconto
			};

			return medicamentos.$add(newMedicamento).then(function() {
				console.log("Medicamento cadastrado com sucesso!");
			})
		}
	};

	return Medicamentos;
});