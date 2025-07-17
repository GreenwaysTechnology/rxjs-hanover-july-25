import { interval, sampleTime } from 'rxjs'

function main() {
    const source = interval(1500)
    source.pipe(
        sampleTime(200) //emits the lastest value every 1000 ms
    ).subscribe(value => console.log(value))
}
main()