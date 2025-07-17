import { of, takeWhile } from 'rxjs'

function main() {
    const source = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

    source.pipe(
        takeWhile(value => value <= 5)
    ).subscribe(value => console.log(value))
}
main()