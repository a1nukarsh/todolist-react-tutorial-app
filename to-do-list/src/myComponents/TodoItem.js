import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div className="my-3">
            <h5>{todo.title}</h5>
            <p>{todo.desc}</p>
            <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
