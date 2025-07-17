import { distinct, of, takeWhile } from 'rxjs'

function main() {
    const source = of(
        { id: 1, name: 'a' },
        { id: 1, name: 'b' },
        { id: 2, name: 'c' },
        { id: 3, name: 'd' },
        { id: 2, name: 'e' }
    )

    source.pipe(
        distinct(user => user.id)
    ).subscribe(value => console.log(value))
}
main()