import { from, groupBy, mergeMap, toArray } from 'rxjs'
function main() {
    //data set
    const people = [
        { name: 'Subramanian', age: 45 },
        { name: 'Geetha', age: 45 },

        { name: 'Murugan', age: 65 },
        { name: 'John', age: 65 },

        { name: 'Frank', age: 25 },
        { name: 'Erik', age: 26 },
        { name: 'Sue', age: 34 }
    ]
    from(people)
        .pipe(
            groupBy(person => person.age), //separate into observable based on condition
            mergeMap(group => group.pipe(toArray()))
        )
        .subscribe(val => console.log(val))
}
main()