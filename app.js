const balls = Array.from(document.querySelectorAll('.ball'));
const body = document.querySelector('body');
balls.push("Hello");
console.log(balls.toString());
balls.unshift("Hi");
balls.splice(1,2)
console.log(balls.indexOf("Hi")+balls);

const arr = [1,2,3,4,5,6];
arr.forEach((i) => {
    console.log(i);
});