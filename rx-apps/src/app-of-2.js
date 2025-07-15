import { of } from "rxjs"

function streamFruits() {
    return of('apple', 'banana', 'organe', 'cherry')
}

function main() {
    streamFruits().subscribe({
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