import { bufferToggle, fromEvent, interval } from "rxjs"

function main() {
    const clicks = fromEvent(document, 'click')
    const openings = interval(5000)//start buffering every 5 secs
    const closingSelector = () => interval(2000) // close the buffer after 2 secs
    const buffer = clicks.pipe(
        bufferToggle(openings, closingSelector)
    )
    buffer.subscribe(value => console.log(value))
}
main()