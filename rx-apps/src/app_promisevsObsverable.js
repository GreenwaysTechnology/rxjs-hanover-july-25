import { of } from "rxjs"

function getPromise() {
    return Promise.resolve('hello')
}
function getObsverable() {
    return of(1, 2,)
}
function main() {
    //eager
    console.log(getPromise())
    //lazy
    console.log(getObsverable())
}
main()