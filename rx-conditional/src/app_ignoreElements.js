import { of, ignoreElements } from 'rxjs'

function main() {
    of('you', 'are', 'talking', 'to', 'me').pipe(
        ignoreElements()
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