import { from,  partition } from 'rxjs'
import TODOS from './mock-data/todos'
function main() {

    const source = from(TODOS)
    const [completedTodos, unCompletedTodos] = partition(source, todo => {
       
        return todo.completed === true
    })
    completedTodos.subscribe(val => {
       console.log(val)
    })
    unCompletedTodos.subscribe(val => console.log(val))
}
main()