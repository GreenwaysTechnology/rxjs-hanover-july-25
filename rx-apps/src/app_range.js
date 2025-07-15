import { range } from "rxjs"


function main() {
    range(1, 100).subscribe({
        next: value => {
            console.log(`${value}`)
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