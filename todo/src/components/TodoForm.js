import React, {useState, useReducer} from "react";
//import TodoList from "./TodoList";
import {addItem,toggleItem ,clearCompleted, reducer, initialState} from "../reducers/reducer";


function TodoForm(props) {
    const [newItem, setNewItem] = useState("");
    
    //console.log(newItem);

const [state, dispatch] = useReducer(reducer, initialState);

console.log(state.todoList);

    const handleChange = (e) => {
        setNewItem(e.target.value);
    };
    const submitItem = (e) => {
        e.preventDefault();
        setNewItem("");
    };

    

//     const deleteItem = (e) => {
// e.preventDefault();
// state.todoList.filter((item))
//     }

    return(
        <>
        {state.todoList.map((item) => {
            return (
            <div key={item.id}className="todo-list">
                <div onClick={() => dispatch({type: toggleItem})} className={`item${item.completed ? "completed" : ""}`}>
                    <p>{item.item}</p>
                </div>
            </div>
        )})}
        <form onSubmit={submitItem}>
            <input type="text" name="newItem" placeholder="New Todo" value={newItem} onChange={handleChange}/> 
            <br />
            <button onClick={() => dispatch({type: addItem, payload: newItem}) } className="add-item">Add New Item</button>
            <br />
            <button onClick={(e) => props.clearCompleted(e)} className="clear-items">Clear Completed Item(s)</button>
        <br/>
        </form>
        
        </>
    )
};



export default TodoForm;
