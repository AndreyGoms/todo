import React, { useContext } from "react";
import TodoItemList from "./TodoItemList";
import { TodoContextType } from "../contexts/TodoContextType";
import { TodoContext } from "../contexts/TodoContext";

const TodoList = () => {
    const { todos } = useContext<TodoContextType>(TodoContext);

    return (
        <>            
            <h4>Minha lista de tarefas</h4>
            <table className="uk-table">
                <caption>Lista de tarefas</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tarefa</th>
                        <th></th>
                    </tr>
                </thead>
                <body>
                    {
                        todos?.map( 
                            todo => (<TodoItemList key={todo.id} todo={todo}/>)
                        )
                    }
                </body>
            </table>
        </>

    );
}

export default TodoList;