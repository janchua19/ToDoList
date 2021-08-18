import React from "react";
import TodoItem from "./TodoItem";
import {selectDoneList } from "../reducers/todosSlice";
import { useSelector } from 'react-redux';



function DoneList()
{
    const doneList = useSelector(selectDoneList);
    return (
        <div>
            {
                doneList.map(todo => (
                    <TodoItem key={todo.id} itemId={todo.id}/>
                ))
            }
        </div>
    )
}
export default DoneList;