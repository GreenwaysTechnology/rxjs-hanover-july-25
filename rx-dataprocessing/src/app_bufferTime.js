import { buffer, bufferCount, bufferTime, from, fromEvent, interval, take } from "rxjs"

function main() {
    const intervals = interval(1000)
    intervals.pipe(
        bufferTime(2000) //emit every 2sec
    ).subscribe(values => console.log('Buffered', values))
}
main()