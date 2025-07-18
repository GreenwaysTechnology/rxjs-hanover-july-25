import { asyncScheduler, observeOn, of } from 'rxjs'

//delay each click by random time
function main() {
    console.log('before subscription')
    of(1, 2, 3, 5).pipe(
        observeOn(asyncScheduler)
    ).subscribe(val => console.log(val))
    console.log('after subscription')
}
main()