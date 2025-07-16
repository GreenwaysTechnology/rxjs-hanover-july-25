import { forkJoin, from, of } from "rxjs"

function main() {

    const url1 = `https://jsonplaceholder.typicode.com/users/1`
    const url2 = `https://jsonplaceholder.typicode.com/posts?userId=1`
    const users = from(fetch(url1).then(res => res.json()))
    const posts = from(fetch(url2).then(res => res.json()))

    forkJoin({ user: users, posts: posts }).subscribe(result => {
        console.log('User :', result.user)
        console.log('Posts :', result.posts)
    })

}
main()