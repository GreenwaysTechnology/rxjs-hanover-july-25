import { first, range } from 'rxjs'

function main() {
    range(1, 100).pipe(
        first()
    ).subscribe(value => console.log(value))
}
main()