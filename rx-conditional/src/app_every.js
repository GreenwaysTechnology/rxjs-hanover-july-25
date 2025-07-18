import { every, of } from "rxjs"

function main() {
    of(2, 4, 6, 8, 10).pipe(
        every(val => val % 2 === 0)
    ).subscribe(val => console.log(val ? "Every values are even" :"Some of the values are not even"))

    of(2, 4, 3, 1, 10).pipe(
        every(val => val % 2 === 0)
    ).subscribe(val => console.log(val ? "Every values are even" :"Some of the values are not even"))
}
main()