// ES6-Arrow-Functions

let add = function(x,y){
    return x+y;
}

console.log(add(10, 20));

let sum = (x,y) => x + y; // Here we dont require a return statement because of one single operation, if there are more operation we have to specify what to return
console.log(sum(10, 20));

const counter = {
    count: 1,
    next: function() {
        return ++(this.count); // this is refering to the present object which is executed but not the object in which "this" is written you can refer ti as parent object and here that is counter object
    }
}

console.log(counter.next());
console.log(counter.next());
console.log(counter.next());

const counter2 = {
    count: 1,
    next: function() {
        return ++(counter2.count);
    }
}

console.log(counter2.next());
console.log(counter2.next());
console.log(counter2.next());

let a = {
    i : 1,
    f: function(){
        let i = 2;
        b = {
            i : 3,
            f2: function(){
                return this.i;
            }
        }
        console.log(b.f2());
    }
}

a.f();

let d = {
    e:function(){
        return "hi";
    },
    f:this
    // g:d.e() the function in an object is only defined after the initialisation has completed of the parent object so we cannot acces the function here
}
console.log(d.e()+" "+d.f);
// in arrow function this is refering to the window object

function createObject(){
    this.n = "Piyush";
    this.e = function(){
        return this.n
    }
    this.c = this.e;
    this.f = this;
}

let d1 = new createObject();
console.log(d1.c()+" "+d1.f);    // object created in this particular way lets you acces the object's function within the function