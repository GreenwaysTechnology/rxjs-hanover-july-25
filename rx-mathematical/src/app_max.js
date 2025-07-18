import { of, max } from 'rxjs'

function main() {
    of(1, 2, 3, 4, 1000).pipe(
        max()
    ).subscribe(value => console.log(value))


}
main()