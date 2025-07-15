//pure function Rule A:


//pure function
function sayHello(message) {
    return message
}
console.log(sayHello('hello'))

//pure or not : No : Impure function
function doubleIt(value) {
    //side effects
    return value * 2
}
console.log(doubleIt(2))