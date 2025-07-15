import { concat, from, of } from "rxjs"
function main() {
    const api1 = from(fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json()))
    const api2 = from(fetch('https://jsonplaceholder.typicode.com/users/2').then(res => res.json()))
    concat(api1, api2).subscribe(val => console.log(val))
}
main()