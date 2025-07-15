import { fromEvent } from "rxjs"

function main() {
    //attach document and convert dom events into observable
    const clickStream = fromEvent(document, 'mousemove')
    //attach subscriber
    clickStream.subscribe({
        next: value => {
            console.log(`X ${value.clientX} Y ${value.clientY}`)
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