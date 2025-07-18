import { Subject } from 'rxjs'
function main() {

    const subject = new Subject()

    subject.subscribe(val => console.log('Subscriber A', val))
    subject.subscribe(val => console.log('Subscriber B', val))

    //emit value
    subject.next(1)

}
main()