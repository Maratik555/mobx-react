import React from 'react'
import {observer} from 'mobx-react-lite'
import {onTodo} from './store/todo'


const Todo = () => {
    const {todos, addTodo, removeTodo, completeTodo, fetchTodo} = onTodo

    return (
        <div style={{marginLeft: '50px'}}>
            <div>
                <button onClick={fetchTodo}> Todos </button>

            </div>
            <br/>
            {todos.map(todo =>
                <li key={todo.id}>
                    <input type="checkbox" checked={todo.completed}
                           onChange={() => completeTodo(todo.id)}/>
                    {' № '}{todo.title}{' - '}
                    <button onClick={() => addTodo(todo)}>Add</button>
                    {' '}
                    <button onClick={() => removeTodo(todo.id)}>X</button>
                </li>
            )}
        </div>
    )
}

export default observer(Todo)
