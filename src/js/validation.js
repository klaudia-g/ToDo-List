const validateLogin = function() {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function(e) {
        const username = document.getElementById('login-username');
        const password = document.getElementById('login-password');

        if (username.value.length < 3 || password.value.length > 15 || /\s/.test(username.value)) {
            e.preventDefault();
            alert('Login musi posiadać od 3 do 15 znaków i nie może zawierać spacji');
        } 
    
        if (password.value.length < 5 || password.value.length > 20) {
            e.preventDefault();
            alert('Hasło musi posiadać od 5 do 20 znaków');
        } 
        console.log('dziala');
    });
}


const validateSignUp = function() {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', function(e) {
        const username = document.getElementById('signup-username');
        const password = document.getElementById('signup-password');

        if (username.value.length < 3 || password.value.length > 15 || /\s/.test(username.value)) {
            e.preventDefault();
            alert('Login musi posiadać od 3 do 15 znaków i nie może zawierać spacji');
        } 
    
        if (password.value.length < 5 || password.value.length > 20) {
            e.preventDefault();
            alert('Hasło musi posiadać od 5 do 20 znaków');
        } 
        console.log('dziala');
    });
}

export { validateLogin, validateSignUp };