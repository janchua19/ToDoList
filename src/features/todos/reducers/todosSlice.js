import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid";
import TodoItem from "../components/TodoItem";

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

        DeleteTodo(state, action) {
           todosAdapter.removeOne(state, action.payload)
        },

        AddTodos(state, action){
            todosAdapter.addMany(state, action.payload);
        },
    },
});


export const { AddTodo, ToggleTodo, DeleteTodo, AddTodos } = todosSlice.actions;
export default todosSlice.reducer;
export const {selectAll: selectTodos, selectIds: selectTodoIds, selectById: selectTodoById} = todosAdapter.getSelectors((state) => state.todoList);
export const selectDoneList = createSelector ([selectTodos], (todos) => todos.filter((todo) => todo.done));