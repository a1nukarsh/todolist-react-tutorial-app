import React from 'react'
import {TodoItem} from '../myComponents/TodoItem'

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center">To Do's List</h3>
            {/* {props.todos} */}
            <TodoItem todo={props.todos[1]}/>
        </div>
    )
}
