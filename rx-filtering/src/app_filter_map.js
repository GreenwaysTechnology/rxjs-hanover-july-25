import { filter, map, range } from 'rxjs'

function main() {
    range(1, 100).pipe(
        filter(n => n % 2 === 0),
        map(value => value * 2)
    ).subscribe(value => console.log(value))
}
main()