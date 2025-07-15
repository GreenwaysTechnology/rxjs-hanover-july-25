import { from ,of} from "rxjs"

import TODOS from "./mock-data/todos"

function streamArray() {
    return from(TODOS)
}

function main() {
    streamArray().subscribe({
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