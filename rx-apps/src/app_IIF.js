import { EMPTY, iif, of } from "rxjs";


function main() {
    const showMessage = false
    iif(
        () => { return showMessage },
        of('Showing Message'),
        EMPTY
    ).subscribe({
        next: value => {
            console.log(value)
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