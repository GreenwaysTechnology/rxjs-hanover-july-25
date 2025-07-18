import { filter, map, of, tap } from 'rxjs'

function main() {
    of(1, 2, 3, 4, 5).pipe(
        tap(val => console.log('Before Map', val)),
        map(val => val * 2),
        tap(val => console.log('After Map', val)),
        filter(val => val % 2 === 0),
        tap(val => console.log('After filter', val)),


    ).subscribe(val => { })
}
main()