import { timer } from "rxjs";


function main() {
    timer(3000,1000).subscribe({
        next: value => {
            console.log(`Fired ${value}`)
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