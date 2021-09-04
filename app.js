const element = document.querySelector("#selectme");
element.innerHTML = "This is from js";
element.classList.add('selector')
console.log(element.classList);
element.classList.remove('selector');
console.log(element.classList);

element.style.color = "blue";

const body = document.querySelector('body');
console.log(body.classList.toggle('dark'));

console.log(document.querySelector('body').classList.contains('dark'));