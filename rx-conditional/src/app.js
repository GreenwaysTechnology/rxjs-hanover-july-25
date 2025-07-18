import { of, single } from 'rxjs'

function main() {
    of(1, 2, 3, 3, 4, 5).pipe(
        single(value => value === 3)
    ).subscribe({
        next: (va) => {
            console.log(va) //never be called
        },
        error: (err) => {
            console.log(err)
        },
        complete: () => {
            console.log('done') // called when done
        }
    })
}
main()