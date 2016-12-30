'use strict';

app.controller('MedicamentoCtrl', function(Medicamentos, $scope) {
	$scope.salvaMedicamento = function(medicamento) {
		console.log("Botão foi clicado e o medicamento ", medicamento, " foi salvo");
		Medicamentos.saveMedicamento(medicamento);
	};

	$scope.medicamentos = Medicamentos.listAllMedicamentos();

	$scope.message = "Teste";
});