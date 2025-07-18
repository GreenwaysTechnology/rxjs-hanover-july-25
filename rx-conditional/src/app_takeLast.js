import { from,  takeLast } from 'rxjs'

function main() {
    const source = from([1, 2, 3, 4, 5, 6, 7])
    source.pipe(
        takeLast(3)
    ).subscribe(value => console.log(value))
}
main()