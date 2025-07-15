import { from } from "rxjs"

function getPromise() {
    const promise = Promise.reject('something went wrong!!')
    return from(promise)
}

function main() {
    getPromise().subscribe({
        next: value => {
            console.log('Got', value)
        },
        error: err => {
            console.log(`Got Err:  ${err}`)
        },
        complete: () => {
            console.log('Completed')
        }
    })

}
main()