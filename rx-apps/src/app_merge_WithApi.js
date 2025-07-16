import { merge,from } from "rxjs"

function main() {

    const url1 = "https://jsonplaceholder.typicode.com/users/1"
    const url2 = "https://jsonplaceholder.typicode.com/users/2"
    const api1 = from(fetch(url1).then(res => res.json()))
    const api2 = from(fetch(url2).then(res => res.json()))
    merge(api1, api2).subscribe(user => console.log(`User Name ${user.name}`))

}
main()