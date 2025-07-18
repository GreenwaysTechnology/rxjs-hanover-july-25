import { AsyncSubject } from 'rxjs'

function main() {
    const subject = new AsyncSubject()
    subject.subscribe(val => console.log('A', val))
    subject.next(1)
    subject.subscribe(val => console.log('B', val))
    subject.next(5)
    subject.complete()

}
main()