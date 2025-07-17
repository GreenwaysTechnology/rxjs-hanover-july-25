import { filter, of } from 'rxjs'

function main() {
    const source = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    source.pipe(
        filter(value => value % 2 === 0)
    ).subscribe(value => console.log('Even Numbers', value))
}
main()