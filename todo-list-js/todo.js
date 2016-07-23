// Fetching from the database: getTodos

// As this function used by all the other functions, let's see the `getTodos` function first. 
// It does not get any parameter. It just fetches the content of the `todo` key of the `localStorage`
// using the `getItem` method. If this is the first time ever the function is called, the specific 
// localStorage entry will be empty and the `localStorage.getItem` call will return `null`. In that 
// case we return the newly created empty Array.

// If the returned value is not `null` then it must be the stringified data we stored earlier. 
// We use `JSON.parse` to convert the JSON string back to JavaScript data and return that.

function getTodos(){
	var todos = new Array();

	var todos_string = localStorage.getItem('todo');
	if(todos_string != null){
		todos = JSON.parse(todos_string);
	}

	return todos;
}


// Adding a new TODO entry

// The second function we might want to take a look at is the one called add which is called 
// when the user has clicked on the All button. At first, using getElementById it locates the 
// HTML element with the id task which is the input box and then it retrieves the value the 
// user has typed in.

// Then, calling get_todos we retrieve the already existing list of TODO items from the "database". 
// As explained above, at the first time this function will return an empty Array.

// We append the new task to the Array using the push method and then save the new list of TODO 
// items in the "database". For this we first stringify the Array using the JSON.stringify method 
// and then we store the returned string using the localStorage.setItem method.

// In the next step we call the show() function that will update the list of TODOs displayed on 
// the web page.

// Finally we return false; to avoid any further actions generated by the 'click' event.

function addTodo(){
	var task = document.getElementById('task').value;

	var todos = getTodos();
	todos.unshift(task); //unsift insere o elemento no início do fila
	localStorage.setItem('todo', JSON.stringify(todos));

	showTodos();

	return false;
}


// Show the TODO list

// The show function will display the current TODO list stored in the "database". First thing 
// it calls get_todos to get the (possibly empty) Array of TODO items.

// Then we manually create an HTML snippet in the, otherwise arbitrarily named html variable. 
// This is a ul element (and unordered list), with a li (list item) for each TODO entry. In addition 
// to the content of the todos array we also add a button to each list item. Each button belongs to 
// a class called 'remove' and each button has an id containing the index of the todo item in the list 
// retrieved from the "database". We'll use these buttons to allow the user to remove an item from the list.

// The call document.getElementById('todos').innerHTML = html; insert the newly generated HTML 
// snippet in the original document loaded from the server. It actually replaces the content of 
// the element with the id "todos". This means in subsequent calls it will just show the new list 
// regardless of what was there earlier.

// In the next 4 lines we use the getElementsByClassName method to fetch all the buttons that are 
// in the 'remove' class. These are the buttons we have just added to each todo item. To each button 
// we assign a event listener that will be called if the user clicks on either of those buttons. 
// The call to addEventListener connects the 'click' event to the remove function.

function showTodos(){
	var todos = getTodos();

	var html = '<ul>';
	for (var i=0; i<todos.length; i++){
		html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">X</button></li>';
	};

	html += '</ul>';

	document.getElementById('todos').innerHTML = html;

	var buttons = document.getElementsByClassName('remove');
	for (var i=0; i < buttons.length; i++){
		buttons[i].addEventListener('click', removeTodo);
	};
}


// Remove a TODO item

// Finally we arrive to the remove function that will be called when the user clicks on any 
// of the remove buttons. (The remove buttons have an X on them.)

// this represents the current DOM-object which is the remove-button the user just clicked. 
// We retrieve the value of its id attribute using the getAttribute method. This is the index 
// of the specific TODO item among the TODO items in the "database".

// After retrieving the current list of TODO items, we use the splice method to remove a specific 
// element from the JavaScript array, and then we store the new list back the database.

// Then, just as in the add function we call the show function to update the list in the browser 
// as well and we return false; to stop the propagation of the 'click' event.

function removeTodo(){
	var id = this.getAttribute('id');
	var todos = getTodos();

	todos.splice(id, 1);
	localStorage.setItem('todo', JSON.stringify(todos));

	showTodos();

	return false;
}

document.getElementById('add').addEventListener('click', addTodo);
showTodos();


// FONTE: http://code-maven.com/todo-in-html-and-javascript