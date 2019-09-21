var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function getList() {
  fetch("/:userId")
  .then((res) => res.json())
  .then((data) => {
      let output = "";
    data.forEach(function(task) {
        output += `
        <li class="list-group-item" >
                      <label><input type="checkbox" class="form-check-input" value="">
                      ${task.title}</label>
                      <div class="fonts d-inline ">
                          <i class="far fa-edit"></i>
                          <i class="fas fa-trash-alt"></i>
                      </div>
                  </li>
        `;
    });  
    taskContainer.appendChild(output);
  })
}


// const getTasks = async () => {
//   const request = new Request("http://localhost:3000/api/tasks", {
//     method:"GET"
//   });

//   try {
//     const data = await fetch(request);
//     const lists = await data.json();
//     const myToDos = [...lists];
//     console.log(myToDos);
  
//   for (let i = 0; i<myToDos.length; i++){

//     let li = document.createElement('li');
// let trashIcon = document.createElement('i');
// let editIcon = document.createElement('i');
// let div = document.createElement('div');
// let label = document.createElement('label');
// let input = document.createElement('input');
// let addInput = document.getElementById('inputForm').value;
// let span = document.createElement('span');

// li.dataset.id = myToDos[i]._id;
// li.className = "list-group-item";
// trashIcon.className = "fas fa-trash-alt";
// editIcon.className = "far fa-edit";
// input.classList ="form-check-input";
// input.type = "checkbox";
// input.value = "";
// div.className = "fonts d-inline";

// div.appendChild(editIcon);
// div.appendChild(trashIcon);

// li.appendChild(label);
// label.appendChild(input);

// span.innerHTML = addInput;
// label.appendChild(span);

// li.appendChild(div);
// taskContainer.appendChild(li);
// trashIcon.addEventListener('click', removeElement);

//   }} catch(err) {
//     console.log("Error: ", err.message);
//   }
// };

const createTask = async () => {
  const taskTitle = document.querySelector('#inputForm').value;
  fetch('/', {
    method: 'POST',
    headers: {
        'Accept':'applicaton/json, text/plain, */*',
        "Content-type":'application/json'
    }
})
.then((res) => tasks.create(res))
.then((data) => console.log(data))

};
const deleteTask = async (element) => {
  fetch('/:userId/:taskId',{
    method: 'POST',
    headers: {
        'Accept':'applicaton/json, text/plain, */*',
        "Content-type":'application/json'
    })
  .then((res) => tasks.delete(res))
  // const request = new Request("http://localhost:3000/api/tasks" + element.dataset.id, {
  //   method: "DELETE"
  // });
  // try {
  //   const data = await fetch(request); 
  //   const deletedTask = await data.json();
  //   return deletedTask;
  // } catch (err) {
  //   console.log("Error: ", err.message);
  // }

}}


const updateTask = async (e) => {
  const request = new Request("http://localhost:3000/api/tasks",{ 
  method: "PUT"
});

try {
  const data = await fetch(request);
  
} catch(err) {
console.log("Error: ", err.message);
  }
}



module.exports = router;
