import { interval, materialize, take, toArray } from 'rxjs'

//delay each click by random time
function main() {
    interval(5000).pipe(
       materialize()
    ).subscribe(value=>console.log(value))
}
main()