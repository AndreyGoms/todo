import React, { useContext } from "react";
import { Todo } from "../models/Todo";
import { TodoContextType } from "../contexts/TodoContextType";
import { TodoContext } from "../contexts/TodoContext";


interface ITodoListItemProps {
    todo: Todo;
}

const TodoItemList = (props: ITodoListItemProps) => {
    //pegado os metodos que há em TodoContextType
    const { removeTodo, toggle } = useContext<TodoContextType>(TodoContext)
    
    const onRemove = (todo: Todo) => {
        removeTodo(todo)
    }

    const handleChange = () => {
        toggle(props.todo)
    }

    return (
        <tr className="uk-animation-slide-bottom-medium">
        <td className="uk-width-auto">
            <label>
                <input 
                    className="uk-checkbox"
                    type="checkbox"
                    checked={props.todo.done}
                    onChange={handleChange}
                />
                    
                
            </label>
        </td>
        <td className="uk-width-expand">
            {props.todo.title}
        </td>
        <td className="uk-width-auto">
            <button
                className="uk-icon-button uk-button-danger"
                uk-icon="trash"
                onClick={() => onRemove(props.todo)} 
                ></button>
        </td>
    </tr>
    )
}

export default TodoItemList