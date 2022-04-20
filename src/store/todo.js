import {makeAutoObservable} from 'mobx'


class Todo {
   todos = []

    constructor() {
        makeAutoObservable(this)
    }

    addTodo = (todo) => {
       this.todos.push(todo)
    }

    removeTodo = (id) => {
       this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo = (id) => {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo )
    }

    fetchTodo = () => {
     fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
      .then(res => res.json())
      .then(json => {
        this.todos = [...json]
      })
    }
}

export const onTodo = new Todo()

