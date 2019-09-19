const trash = document.getElementsByClassName('fa-trash-alt')[0];

const addition = document.getElementById('additionButton');

addition.addEventListener('click', addElement);

// trash.addEventListener('click', removeElement);

function removeElement(e) {
    console.log(e);
};

function addElement (e) {
e.preventDefault();
let li = document.createElement('li');
let trashIcon = document.createElement('i');
let editIcon = document.createElement('i');
let div = document.createElement('div');
let label = document.createElement('label');
let input = document.createElement('input');
let addInput = document.getElementById('inputForm').value;
let span = document.createElement('span');

li.className = "list-group-item";
trashIcon.className = "fas fa-trash-alt";
editIcon.className = "far fa-edit";
input.classList ="form-check-input";
input.type = "checkbox";
input.value = "";
div.className = "fonts d-inline";


div.appendChild(editIcon);
div.appendChild(trashIcon);

li.appendChild(label);
label.appendChild(input);

span.innerHTML = addInput;
label.appendChild(span);

li.appendChild(div);

let taskContainer = document.getElementById('taskContainer');
taskContainer.appendChild(li);
;}