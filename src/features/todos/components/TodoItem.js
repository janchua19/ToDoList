import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {selectTodoById, ToggleTodo, DeleteTodo } from "../reducers/todosSlice";
import "../styles/TodoItem.css";

function TodoItem(props) {
    const todo = useSelector (state => selectTodoById(state, props.itemId));
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(ToggleTodo(props.itemId))
    }

    function onClickDelete(event) {
        dispatch(DeleteTodo(props.itemId))
         event.stopPropagation();
    }

    const todoStatus = todo.done ? "done" : ""; // if done will name done if not will be blank


    return (<div className = "TodoItem-Table">
            <span className= {`TodoItem-todo ${todoStatus}`} onClick = {handleClick}>{todo.text}</span>
            <button className= "Delete" onClick = {onClickDelete}>X</button>
    </div>);
}

export default TodoItem;
