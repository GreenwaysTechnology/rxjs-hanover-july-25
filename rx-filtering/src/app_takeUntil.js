import { from,  interval, timer, takeUntil, } from 'rxjs'

function main() {
    const source = interval(1000)//emits once sec
    const stop = timer(5000) //emits once after 5 seconds

    source.pipe(
        takeUntil(stop)
    ).subscribe(value => console.log(value))
}
main()