import { interval, take } from 'rxjs'

function main() {
    
    interval(1000).pipe(
        take(3)
    ).subscribe(value => console.log(value))
}
main()