import { from, Subject } from 'rxjs'
function main() {

    const subject = new Subject()
    subject.subscribe(val => console.log('Subscriber A', val))
    subject.subscribe(val => console.log('Subscriber B', val))

    const observable = from([1, 2, 3, 5, 6, 7])
    observable.subscribe(subject)

}
main()