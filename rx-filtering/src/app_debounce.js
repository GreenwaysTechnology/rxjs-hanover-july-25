import { debounceTime, fromEvent,map } from 'rxjs'

function main() {
    const search = document.getElementById('search')
    fromEvent(search, 'keyup').pipe(
        map(evt => evt.target.value),
        debounceTime(2000)
    ).subscribe(value => console.log(value))
}
main()