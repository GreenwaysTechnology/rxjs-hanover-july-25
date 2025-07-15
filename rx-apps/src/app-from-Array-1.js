import { from ,of} from "rxjs"

function streamArray() {
    const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return from(numList)
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