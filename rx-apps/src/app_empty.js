import { empty } from "rxjs";


function main() {
    empty().subscribe({
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