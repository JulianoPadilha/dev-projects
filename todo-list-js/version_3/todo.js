var addItem = function(){
	var task = document.getElementById('task').value;

	var tasks = getItens();

	tasks.push(task);
	localStorage.setItem('itens', JSON.stringify(tasks));

	showItens();
}

var getItens = function(){
	var tasks = new Array();

	var itens_string = localStorage.getItem('itens');

	if(itens_string != null){
		return JSON.parse(itens_string);
	}
}

var showItens = function(){
	var tasks = getItens();

	var html = '';

	tasks.forEach(function(elemento, index){
		html += '<p>' + elemento + '<button class="remove" id="' + index + '">Remover</button></p>';
	});

	document.getElementById('tasks').innerHTML = html;

	var buttons = document.getElementsByClassName('remove');

	for (var i=0; i < buttons.length; i++){
		buttons[i].addEventListener('click', removeItem);
	}
}

var removeItem = function(){
	var tasks = getItens();

	var id = this.getAttribute('id');

	tasks.splice(id, 1);
	localStorage.setItem('itens', JSON.stringify(tasks));

	showItens();
}


document.getElementById('add').addEventListener('click', addItem);
showItens();