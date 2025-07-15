import { interval } from "rxjs";


function main() {
    const stream = interval(1000).subscribe({
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

    setTimeout(() => {
        console.log('going to stop')
        stream.unsubscribe()
    }, 10000)


}
main()