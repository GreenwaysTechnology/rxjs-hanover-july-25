import { from } from "rxjs"

function getPromise() {
    const promise = Promise.resolve('Hello')
    return from(promise)
}

function main() {
    getPromise().subscribe({
        next: value => {
            console.log('Got', value)
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