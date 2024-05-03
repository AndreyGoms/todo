import React from "react";
import TodoList from "./TodoList";
import TodoContext from "../contexts/TodoContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTodo from './AddTodo';
import NavBar from "./NavBar";

/*A partir da versao 6 do react-router-dom, é trocado o switch por Routes!!*/

const App = () => {
    return (
    <TodoContext>
        <Router>
            <NavBar></NavBar>
            <br />
            <div className="uk-container">
                <Routes>
                    <Route path="/" element={<TodoList/>}/>
                    
                    <Route path="/create" element={<AddTodo/>}/>
                </Routes>
            </div>
        </Router>
    </TodoContext>
    );
}

export default App;
