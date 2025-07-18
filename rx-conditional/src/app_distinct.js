import { distinct, of, takeWhile } from 'rxjs'

function main() {
    const source = of(1, 2, 3, 4, 2, 3, 6, 8, 9, 10, 10)

    source.pipe(
        distinct()
    ).subscribe(value => console.log(value))
}
main()