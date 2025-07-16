import { buffer, bufferCount, from, fromEvent, interval, take } from "rxjs"

function main() {
    const intervals = interval(1000)
    intervals.pipe(
        bufferCount(5)
    ).subscribe(values => console.log('Buffered', values))
}
main()