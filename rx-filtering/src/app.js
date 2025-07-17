import { auditTime, fromEvent, interval } from 'rxjs'

function main() {
    const source = fromEvent(document, 'click').pipe(
        auditTime(1000) //emit lastest click every 10000
    ).subscribe(event => console.log('Audited Click', event))
}
main()