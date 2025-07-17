import { catchError, map, of } from 'rxjs'
import { ajax } from 'rxjs/ajax'

function main() {

    // const APIURL = 'https://jsonplaceholder.typicode.com/posts'
    const APIURL = 'https://jsonplaceholder.typicode.com/posxxxs'

    ajax.getJSON(APIURL).pipe(
        catchError(() => {
            return of([{ id: 0, userId: 0, title: 'title', body: 'body' }])
        })
    ).subscribe({
        next: (val) => {
            val.forEach(post => {
                console.log(post.id, post.userId, post.title, post.body)
            })
        },
        error: (err) => console.log('error', err),
        complete: () => console.log('complete')
    })
}
main()