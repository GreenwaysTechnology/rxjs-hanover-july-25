import { fromEvent } from "rxjs"

function main() {
    const input = document.getElementById('searchBox')
    const inputStream = fromEvent(input, 'keyup')
    inputStream.subscribe({
        next: e => {
           console.log(`Key Pressed ${e.key}`)
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