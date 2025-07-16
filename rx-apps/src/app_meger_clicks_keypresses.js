import { from, fromEvent, merge, of } from "rxjs"

function main() {

    const clicks = fromEvent(document, 'click')
    const keypress = fromEvent(document, 'keydown')
    merge(clicks, keypress).subscribe(event => console.log(`User Action ${event.type}`))

}
main()