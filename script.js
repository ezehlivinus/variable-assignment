
// Add your code here
let myName = 'Ezeh Livinus'
let myAge = 20


// Don't edit or touch the code below here!
// Don't edit or touch the code below here!
// Don't edit the code below here!

let h1 = document.querySelector('h1')
h1.textContent = 'Congrats! You have linked your JavaScript file and it is now working'

let paragraph1 = document.createElement('p');
paragraph1.setAttribute('id', 'first-paragraph')
paragraph1.textContent = myName;

let paragraph2 = document.createElement('p');
paragraph2.setAttribute('id', 'second-paragraph')
paragraph2.textContent = myAge;

let section = document.querySelector('section')
section.appendChild(paragraph1);
section.appendChild(paragraph2);

