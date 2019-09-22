const createUser = function() {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        const username = document.getElementById('signup-username');
        const name = document.getElementById('signup-name');
        const password = document.getElementById('signup-password');
        const body = {
            username: username.value,
            name: name.value,
            password: password.value
        };
    
        fetch('/users', {
          method: 'POST',
          headers: {
              'Accept':'applicaton/json, text/plain, /',
              "Content-type":'application/json'
          },
          body: JSON.stringify(body)
       })
       .then((data)=>console.log(data))
        .catch((err)=>console.log(err))
    });
}



const logUser = function() {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        const username = document.getElementById('login-username');
        const password = document.getElementById('login-password');
        const body = {
            username: username.value,
            password: password.value
        };
    
        fetch('/auth', {
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
}



const logOut = function(e) {
    const button = document.getElementById('logout');

    button.addEventListener('click', function(e){
        e.preventDefault();

        fetch('/logout', {
          method: 'DELETE'
       })
       .then((data) => console.log(data))
        .catch((err)=>console.log(err))
   
    });

}



export { createUser, logUser, logOut };