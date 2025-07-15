import { of } from "rxjs"

function main() {
    const stream = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    stream.subscribe({
        //listeners
        next: value => {
            console.log(`Got ${value}`)
        },
        error: err => {
            console.log(`Got ${err}`)
        },
        complete: () => {
            console.log('Completed')
        }
    })
}
main()