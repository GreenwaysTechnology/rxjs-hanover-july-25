import {  last, range } from 'rxjs'

function main() {
    range(1, 100).pipe(
        last()
    ).subscribe(value => console.log(value))
}
main()