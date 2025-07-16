import { buffer, from, fromEvent, interval, take } from "rxjs"

function main() {
    const clicks = fromEvent(document, 'click')
    const intervals = interval(1000)
    intervals.pipe(buffer(clicks)).subscribe(values => console.log('Buffered', values))
}
main()