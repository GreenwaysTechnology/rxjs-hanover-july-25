import { of, reduce } from 'rxjs'

function main() {
    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
        reduce((acc, val) => acc + val, 0)
    ).subscribe(value => console.log(value))
}
main()