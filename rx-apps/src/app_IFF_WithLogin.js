import { EMPTY, iif, of } from "rxjs";


function main() {
    const isLoggedIn = false
    iif(
        () => { return isLoggedIn },
        of('Welcome Back!'),
        of('Please Login')
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