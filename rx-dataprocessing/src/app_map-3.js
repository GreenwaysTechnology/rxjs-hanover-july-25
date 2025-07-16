import { fromEvent, map, of } from 'rxjs'
function main() {
    const price = of(100)
    price.pipe(
        map(price => price * 1.18), //Add 18%
        map(totalprice => totalprice * 5.0) //Add 5%
    ).subscribe(v => console.log(v))
}
main()