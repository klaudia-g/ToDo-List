const addPost = function() {
    const form = document.getElementById('form');
    const itemList = document.getElementById('items');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        const newItem = document.getElementById('inputForm');
        const li = document.createElement('li');
        li.className = 'list-group-item';

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.className = "form-check-input";
        li.appendChild(checkbox);

        li.dataset.id = Math.floor((Math.random() * 1000));

        li.appendChild(document.createTextNode(newItem.value));

        const editButton = document.createElement('button');
        editButton.className = 'far fa-edit float-right update';
        li.appendChild(editButton);

        const delButton = document.createElement('button');
        delButton.className = 'fas fa-trash-alt float-right delete';
        li.appendChild(delButton);

        itemList.appendChild(li);

    })
}



const removePost = function() {
    const itemList = document.getElementById('items');

    itemList.addEventListener('click', function(e){
        if(e.target.classList.contains('delete')){
            if(confirm('Are you sure?')){
                const li = e.target.parentElement;
                itemList.removeChild(li);
            }
        }
    })
}



const postTask = function() {
    const form = document.getElementById('form');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        const newValue = document.getElementById('inputForm');
        const body = {
            isChecked: false,
            content: newValue,
            userId: 1
        };
    
        fetch('/tasks', {
          method: 'POST',
          headers: {
              'Accept':'applicaton/json, text/plain, /',
              "Content-type":'application/json'
          },
          body: JSON.stringify(body)
       })
       .then((data) => console.log(data))
        .catch((err)=>console.log(err))
    });
};




const deleteTask = function() {
    const button = document.querySelector('[data-id]');

    button.addEventListener('click', function(e){
        e.preventDefault();
        const userid = 1;
        const postid = e.target.dataset.id;
      
        fetch(`/:${userid}/:${postid}`, {
          method: 'DELETE',
       })
       .then((data) => console.log('dziala'))
        .catch((err)=>console.log(err))
    });

}

export { addPost, removePost, postTask, deleteTask };



