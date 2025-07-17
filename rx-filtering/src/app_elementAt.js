import { elementAt, range } from 'rxjs'

function main() {
    range(1, 100).pipe(
        elementAt(3)
    ).subscribe(value => console.log(value))
}
main()