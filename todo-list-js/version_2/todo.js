var addTask = function(){
	var task = document.getElementById('task').value; // Pega o valor digitado no input e armazena na variável 'task'.

	var tasks = getTasks(); // Chamamos em uma variável a função 'getTasks' que cria um array que traz todas as tasks salvas antes de inserir uma nova.

	tasks.push(task); // Utilizamos o push para jogar o elemento armazenado na variável 'task' para nosso Array.

	localStorage.setItem('tasks', JSON.stringify(tasks)); // Utilizamos o localStorage para "persistir" as informações no storage do browser. Com parâmetro passamos a chave e o valor, usando 'JSON.stringify' para transformar o valor em ums string.

	// showTasks(); // Chamamos a função showTasks() para ela mostrar na tela o novo elemento adicionado logo após o mesmo ser inserido. Sem ela, teríamos que atualizar o navegador para ver a mudança na tela. 

	document.location.reload(true); // Utilizamos o reload(true) para após a função ser realizada atualizar a a tela. Sendo assim, a função chamada acima pode ser retirada. 

}

var getTasks = function(){
	var tasks = []; // Cria um array vazio caso não tenha nada já armazenado.

	var tasks_string = localStorage.getItem('tasks'); // Pega o conteúdo/valores da chave 'tasks' do 'localStorage' e armazena na variável 'tasks_string'

	if(tasks_string != null){ // Verifica se o array de elementos não é nulo. Caso true então retornará a conversão de um JSON string para um Javascript data.
		return JSON.parse(tasks_string);
	}
}

var showTasks = function(){
	var tasks = getTasks(); // Guardamos em uma variável chamada 'tasks' todos as tasks que temos armazenadas utilizando a função getTasks;

	var html = '<ul>'; // Criamos uma variável 'html' que irá concatenando a nossa estrutura HTML.

	tasks.forEach(function(elemento, index){ // Criamos um forEach para iterar todos os elementos do nosso Array. Utilizamos 'tasks' na frente para referenciar de qual lugar estamos trazendo os elementos. 
		html += '<li>' + elemento + '<button class="remove" id="'+ index +'">X</button></li>'; // Novamente utilizamos a variável 'html' para concatenar nosso HTML passando o 'elemento' que referencia os itens pertencentes as tasks. 'index' representa nosso index dentro do array.
	});

	html += '</ul>'; // Fechamos a concatenação.

	document.getElementById('tasks').innerHTML = html; // Inserimos o conteúdo da variável 'html' dentro da 'div' que contém o id 'todos'. O innerHTML serve justamente para inserir novos conteúdos.

	var buttons = document.getElementsByClassName('remove'); // Pegamos todos os elementos do DOM que possuem a class 'remove' e armazenamos na variável 'buttons'.

	for (var i=0; i < buttons.length; i++){ // Iteramos nossa variável nossos elementos e adicionamos para cada elemento com a class 'remove' o addEventListener conectado com o evento 'click' e o callback da função 'removeTask'.
		buttons[i].addEventListener('click', removeTask);
	};
}

var removeTask = function(){
	var id = this.getAttribute('id'); // Criamos uma variável id para receber o atual objeto-DOM referente ao botão remover que o usuário clicar. O this representa o objeto-DOM atual.

	var tasks = getTasks(); // Guardamos em uma variável chamada 'tasks' todos as tasks que temos armazenadas utilizando a função getTasks;

	tasks.splice(id, 1); // Utilizamos o método splice para remover um elemento específico. Como parâmetro passamos o id referente ao elemento que será removido do array e o valor "1", que representa que estamos realizando apenas uma remoção.

	localStorage.setItem('tasks', JSON.stringify(tasks)); // Após o elemento ser removido, utilizamos novamente o serItem para salvar a nossa nova lista de array.


	// showTasks(); // Chamamos a função showTasks() para ela mostrar na tela a nossa lista de tasks atualizada logo após um item ter sido removido. Sem ela, teríamos que atualizar o navegador para ver a mudança na tela. 

	document.location.reload(true); // Utilizamos o reload(true) para após a função ser realizada atualizar a a tela. Sendo assim, a função chamada acima pode ser retirada.
}

var hasTask = function(){ // Função que verifica se há alguma task salva dentro do Array do localStorage.

	var tasks = getTasks(); // Guardamos em uma variável chamada 'tasks' todos as tasks que temos armazenadas utilizando a função getTasks;

	if(tasks == ''){ // Utilizamos uma condicional para exibir uma mensagem na tela de acordo com o status do nosso array.
		text = '<h2>Não há tarefas cadastradas!</h2>';
		document.getElementById('msg').innerHTML = text;
	} else {
		text = '<h2>Suas tarefas pendentes:</h2>';
		document.getElementById('msg').innerHTML = text;
	}
}

document.getElementById('add').addEventListener('click', addTask); // Buscamos o elemento contendo o id igual a 'add' e em seguinda utilizamos o método 'addEventListener' com o evento de 'click' e o callback que será chamado, no caso, nossa função addTask.

window.addEventListener('keydown', function(event){ // Inserimos uma alternativa para a inserção os elementos, que é pressionando a tecla 'enter'. Para este caso precisamos passar um parâmetro que é uma função que recebe o evento com a keyCode que pressionamos. Depois verificamos se é true e caso seja chama o addTask(); 
	if(event.keyCode == 13){
		addTask();
	};
}); 

hasTask(); // Passamos a função aqui para verificar antes mesmo de listar nossos elementos se o array é vazio ou não.

showTasks(); // Chamamos a função showTasks() para mostrar na telas os elementos do nosso array.