import { interval, publish, tap } from 'rxjs'
function main() {

    const source = interval(1000).pipe(
        tap(() => console.log('value is emitting')),
        publish()
    )

    //
    const subA = source.subscribe(val => console.log('Subscriber A', val))
    const subB = source.subscribe(val => console.log('Subscriber B', val))

    source.connect()
}
main()