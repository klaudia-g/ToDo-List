import {getTasks, createTask, deleteTask} from "../routes/index";
const trash = document.querySelectorAll('.fa-trash-alt');
const edit = document.querySelectorAll('.fa-edit')
console.log(trash);
const addition = document.getElementById('additionButton');

addition.addEventListener('click', addElement);

trash.forEach(function(elem) {
    elem.addEventListener("click", removeElement)
});

edit.forEach(function(elem) {
    elem.addEventListener("click", editElement)
});



let taskContainer = document.getElementById('taskContainer');
let taskUl = document.getElementById('taskUl');

function editElement (e) {
    console.log(e)
   let parent =  e.target.parentElement.parentElement;
   console.log(parent)

   parent.innerHTML = "";
   parent.className = "list-group-item edit-item";
//    input.contentEditable = 'true';
   
    let div = document.createElement('div');
    let label = document.createElement('label');
    let input = document.createElement('input');
    let button = document.createElement('button');

    div.className = "container";
    label.className = "edit";
    label.innerText = "Edit:";
    input.type = "text";
    input.className = "form-control edit";
    button.className = "btn btn-outline-info btn-save";
    button.type = "save";
    button.innerText = "Save";


    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(button);
    parent.appendChild(div);
    
    let buttonSave = parent.div.button;
    
}

function removeElement(e) {
   let parent = e.target.parentElement.parentElement;
   console.log(parent)
   taskUl.removeChild(parent);
   
//    taskContainer.removeChild(parent);
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
taskContainer.appendChild(li);
trashIcon.addEventListener('click', removeElement);
};

