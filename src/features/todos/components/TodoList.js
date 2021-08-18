import React from 'react';
import TodoForm from './TodoForm';
import TodoGroup from './TodoGroup';
import "../styles/TodoList.css";
import { useEffect } from 'react';
import { getTodos } from '../../apis/todos';
import { useDispatch } from 'react-redux';
import { AddTodos } from '../reducers/todosSlice';


    
    function TodoList() {

        const dispatch = useDispatch();

        useEffect(() => {
            getTodos().then((response) => {
                console.log("responde data:", response.data);
                dispatch(AddTodos(response.data));
            })
        }, [])
        
        return (
            <React.Fragment>
                <div className = "TodoList-Container">
                    <TodoGroup/>
                    <TodoForm className="TodoList"/>            
                </div>
            </React.Fragment>
        );
    };


export default TodoList;
