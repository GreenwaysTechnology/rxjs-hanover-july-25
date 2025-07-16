import { bufferWhen, interval } from "rxjs"

function main() {
    const source = interval(500) //emits every 500secs
    const buffered = source.pipe(
        bufferWhen(() => interval(3000)) //close the buffer every 3 secs
    )
    buffered.subscribe(values => console.log(values))
}
main()