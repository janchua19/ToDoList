import React from "react";
import TodoItem from "./TodoItem";
import {selectDoneList } from "../reducers/todosSlice";
import { useSelector } from 'react-redux';
import "../styles/DoneList.css";



function DoneList()
{
    const doneList = useSelector(selectDoneList);
    return (
        <div className="DoneList-Container">
        {  
            doneList.map(todo => (
                <TodoItem key={todo.id} itemId={todo.id}/>
            ))
        }
        </div>
    )
}
export default DoneList;