import { findIndex, of,  } from "rxjs"

function main() {
    of(1, 2, 5, 3, 7, 10).pipe(
        findIndex(val => val % 2 === 0)
    ).subscribe({
        next: (val) => console.log(val),
        error: (err) => console.log(err),
        complete: () => console.log('done')
    })
}
main()