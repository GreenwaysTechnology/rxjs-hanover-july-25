import { zip, of } from "rxjs"

function main() {
    const names = of('Subramanian', 'Erik', 'John', 'Ram', 'Geetha')
    const ages = of(45, 19, 23, 35, 32)

    zip(names, ages, (name, age) => { return `${name} is ${age} years old` })
        .subscribe(value => console.log(value))
}
main()