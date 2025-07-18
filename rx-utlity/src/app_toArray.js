import { interval, take, toArray } from 'rxjs'

//delay each click by random time
function main() {
    interval(100).pipe(
        take(4),
        toArray()
    ).subscribe(value=>console.log(value))
}
main()