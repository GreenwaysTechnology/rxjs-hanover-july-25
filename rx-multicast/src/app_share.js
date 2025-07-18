import { timer, tap, mapTo, share } from 'rxjs'
function main() {
    const source = timer(1000).pipe(
        tap(() => console.log('executing')),
        mapTo('Result'),
        share()
    )
    //
    source.subscribe(val => console.log('Subscriber A', val))
    source.subscribe(val => console.log('Subscriber B', val))

}
main()