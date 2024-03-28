import React from "react";
import { Todo } from "../models/Todo";

const TodoList = () => {
    const todos: Todo[] = [
        {id: 1, title: 'ir ao supermercado', done: false},
        {id: 2, title: 'ir a academia', done: false}
    ];


    return (
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
                        todo => (<div key={todo.id}>{todo.title}</div>)
                    )
                }
            </body>
        </table>

    );
}

export default TodoList;