import React from 'react'
import {TodoItem} from '../myComponents/TodoItem'

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3">To Do's List</h3>
            {props.todos.map((todo)=>{
                return <TodoItem todo={todo} onDelete={onDelete}/>
            })}
        </div>
    )
}
