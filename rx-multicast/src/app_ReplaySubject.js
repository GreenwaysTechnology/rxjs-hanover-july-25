import { from, ReplaySubject } from 'rxjs'

function main() {
    const subject = new ReplaySubject(2) //buffer size-2: 2 values can stored
    subject.next(1)
    subject.next(2)
    subject.next(3)
    subject.next(4)
    subject.subscribe(val => console.log("A", val))
    subject.subscribe(val => console.log("B", val))

    const observable = from([100,200,300,400,500,600])
    observable.subscribe(subject)


}
main()