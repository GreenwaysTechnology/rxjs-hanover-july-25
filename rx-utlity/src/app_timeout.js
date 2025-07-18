import { catchError, of, timeout } from 'rxjs'
import { ajax } from 'rxjs/ajax'

//delay each click by random time
function main() {
    ajax.getJSON('https://jsonplaceholder.typicode.com/todos').pipe(
        timeout(100),
        catchError(() => of('Request timed out'))
    ).subscribe(val => console.log(val))
}
main()