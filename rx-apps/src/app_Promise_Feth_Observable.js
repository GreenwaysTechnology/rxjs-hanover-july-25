import { from } from "rxjs"

function fetchPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
}
function getPromise() {
    return from(fetchPosts())
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