import { buffer, filter, from, fromEvent, interval, take } from "rxjs"

function main() {
    const keydowns = fromEvent(document, 'keydown')
    const enterKey = keydowns.pipe(
        filter(e => e.key === 'Enter')
    )
    enterKey.pipe(
        buffer(enterKey)
    ).subscribe(v => console.log(v))
}
main()