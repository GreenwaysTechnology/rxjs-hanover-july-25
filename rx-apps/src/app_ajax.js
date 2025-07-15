import { ajax } from "rxjs/ajax";


function main() {
    ajax({
        url: 'https://jsonplaceholder.typicode.com/comments',
        method: 'GET',  
    }).subscribe({
        next: value => {
            console.log(value.response)
        },
        error: err => {
            console.log(`Got Err:  ${err}`)
        },
        complete: () => {
            console.log('Completed')
        }
    })




}
main()