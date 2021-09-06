// const rock = document.querySelector('#rock')
// const paper = document.querySelector('#paper')
// const scissor = document.querySelector('#scissor')


function logName(Name = "John Doe", age = 18) {
    // console.log("Nishta")
    console.log(Name + " You are " + age)
}

const add = (a = 0, b = 0) => {
    return a + b
}


console.log(add(12, 23))
