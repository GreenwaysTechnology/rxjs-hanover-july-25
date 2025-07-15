import { timer } from "rxjs";


function main() {
    timer(3000).subscribe({
        next: value => {
            console.log(`Fired after 3 seconds ${value}`)
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