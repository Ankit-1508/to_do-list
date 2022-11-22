 window.addEventListener('load', (e) => {    //arrow function is used with out using the function keyword in the javascript function//
	const form = document.querySelector("#new-task-form");  
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");
//The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
	form.addEventListener('submit', (e) => { //e is an event object
		e.preventDefault();//The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

		const task = input.value;

		const task_el = document.createElement("div");//Create a <div> element 
		task_el.classList.add('task');//add the task inside the task_ei
		const task_content_el = document.createElement("div");//we create the division tag 
		task_content_el.classList.add('content');//we wil add the content inside the division tag
		task_el.appendChild(task_content_el);//we will append the task in the division tag
		const task_input_el = document.createElement('input');//we create the input box 
		task_input_el.classList.add('text');//we will add the text in the input
		task_input_el.type = 'text';//the type of text which we write is in the form of the text
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');//The readonly attribute can be set to keep a user from changing the value until some other conditions have been met (like selecting a checkbox, etc.
		task_content_el.appendChild(task_input_el);//we have the input inside the division tag
		const task_actions_el = document.createElement('div');//now we create the another div tag
		task_actions_el.classList.add("actions");// we add the action which we have to perform
		const task_edit_el = document.createElement('button');// we creat the button dynamically
		task_edit_el.classList.add('edit');//add to edit the task 
		task_edit_el.innerText = 'Edit';//we will name this edit content with the new Edit option

		const task_delete_el = document.createElement('button');//we create the button tag
		task_delete_el.classList.add('delete');//we have to perfom the delete so we use here delete as the tag  name
		task_delete_el.innerText = 'Delete';//we dynamically use give the name Delete to delete button

		task_actions_el.appendChild(task_edit_el);//now we will add the edit task 
		task_actions_el.appendChild(task_delete_el);//now we will add the delete task

		task_el.appendChild(task_actions_el);//to whole div we will add the thee task_action_el

		list_el.appendChild(task_el);//we wiil add this task_el in the list_el

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") 
			{
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");//remove the read only attribute
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");//set the read only attaribute
			   }
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);    //this is used to delete or remove that particular task
		});
	});
}); 