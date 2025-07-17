import { interval, sample } from 'rxjs'

function main() {
    const source = interval(1000)
    source.pipe(
        sample(interval(2000))
    ).subscribe(value => console.log(value))
}
main()