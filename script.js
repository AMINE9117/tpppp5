
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('signup');


console.log(name);
console.log(email);
console.log(password);
console.log(button);

button.addEventListener('click', function() {
    console.log('Button clicked!');
    

    alert("Name: " + name.value + "\nEmail: " + email.value);
});