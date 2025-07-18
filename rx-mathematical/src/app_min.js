import { min, of,  } from 'rxjs'

function main() {
    of(1, 2, 3, 4, 1000).pipe(
        min()
    ).subscribe(value => console.log(value))
}
main()