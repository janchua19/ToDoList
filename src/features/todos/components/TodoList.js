import React from 'react'
import TodoForm from './TodoForm'
import TodoGroup from './TodoGroup'
import "../styles/TodoList.css"

function TodoList() {
    return (
        <div className = "TodoList-Container">
            <TodoGroup/>
            <TodoForm className="TodoList"/>            
        </div>
    );
}

export default TodoList
