'use strict';

app.factory('Itens', function(FURL, $firebaseArray){
	var ref = new Firebase(FURL);
	var itens = $firebaseArray(ref);

	var Itens = {

		all: function() {
			return itens;
		},

		saveItens: function(item) {
			var newItem = {
				name: item.name
			};

			return itens.$add(newItem).then(function(){
				console.log("Item added to database");
			})

		}
	};
	return Itens;
});