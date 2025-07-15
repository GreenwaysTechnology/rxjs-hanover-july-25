import { range } from "rxjs"


function main() {
    const pageSize = 10
    const totalItems = 1000
    range(0, totalItems / pageSize).subscribe({
        next: pageNumber => {
            console.log(`Loading page ${pageNumber + 1}`)
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