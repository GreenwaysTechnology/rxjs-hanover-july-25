import { first, range } from 'rxjs'

function main() {
    range(1, 100).pipe(
        first(value => value > 20)
    ).subscribe(value => console.log(value))
}
main()