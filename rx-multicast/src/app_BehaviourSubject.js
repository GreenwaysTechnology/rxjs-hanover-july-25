import { BehaviorSubject } from 'rxjs'

function main() {
    const subject = new BehaviorSubject(20) //inital value:0
    subject.subscribe(val => console.log('A', val))
    subject.next(1)
    subject.subscribe(val => console.log('B', val))
    subject.next(2)
    subject.next(3)
    subject.next(4)
    subject.next(5)

}
main()