import React, {createContext} from "react";
import { TodoContextType } from "./TodoContextType";
import { title } from "process";
import { Todo } from "../models/Todo";

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => {},
    removeTodo: () => {},
    toggle: () => {},
});

const TodoProvider = (props: any) => {
    const todos: Todo[] = [
        {id: 1, title: 'ir ao supermercado', done: true},
        {id: 2, title: 'ir a academia', done: false}
    ]
    const addTodo = (title: string) => {
        console.log("Adicionou" + title)
    }
    const removeTodo = (todo: Todo) => {
        console.log("removeu" + title)
    }
    const toggle = (title: Todo) => {
        console.log("Alterou" + title)
    }

    return (
        //o que é passado no value, nada mais é do que tudo que voce quer que seja visto pelos 
        //filhos, pelo children
        <TodoContext.Provider value={
            {todos, addTodo, removeTodo, toggle}
        }>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;