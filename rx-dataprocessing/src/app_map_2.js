import { fromEvent, map, of } from 'rxjs'
function main() {
    fromEvent(document.getElementById('username'), 'input')
        .pipe(
            map(e => e.target.value.toUpperCase())
        ).subscribe(value => console.log(value))
}
main()