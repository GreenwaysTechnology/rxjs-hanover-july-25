import { throwError } from "rxjs";


function main() {
    throwError(()=> new Error('Something went wrong')).subscribe({
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