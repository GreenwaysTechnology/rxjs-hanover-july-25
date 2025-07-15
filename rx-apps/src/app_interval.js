import { interval } from "rxjs";


function main() {
    interval(1000).subscribe({
        next: value => {
            console.log(`Value ${value}`)
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