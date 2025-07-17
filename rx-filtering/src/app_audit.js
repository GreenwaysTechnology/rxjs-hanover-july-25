import { audit, fromEvent, interval } from 'rxjs'

function main() {
    const source = fromEvent(document, 'click').pipe(
        audit(() => interval(1000)) //slience for 1 sec after each click
    ).subscribe(event => console.log('Audited Click', event))
}
main()