import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
});

const todosSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        AddTodo(state, action) {
            todosAdapter.addOne(state, {
                id: uuid(),
                text: action.payload,
                done: false,
            });
        },
        ToggleTodo(state, action) {
            const todo = state.entities[action.payload]
            todo.done = !todo.done;
        },

        DeleteTodo(state, {payload}) {
           todosAdapter.removeOne(state, payload)
        },
    },
});


export const { AddTodo, ToggleTodo, DeleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
export const {selectIds: selectTodoIds, selectById: selectTodoById} = todosAdapter.getSelectors((state) => state.todoList);