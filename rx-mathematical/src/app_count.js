import { count, of } from 'rxjs'

function main() {
    of(1, 2, 3, 4).pipe(
        count()
    ).subscribe(value => console.log(`Total Items ${value}`))

    of(1, 2, 3, 4).pipe(
        count(val => val % 2 === 0)
    ).subscribe(value => console.log(`Total Items ${value}`))
}
main()