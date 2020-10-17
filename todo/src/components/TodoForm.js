import React, {useState, useReducer} from "react";
import {addItem, clearCompleted, toggleItem, reducer, initialState} from "../reducers/reducer";


function TodoForm(props) {
    const [newItem, setNewItem] = useState("");
    
    console.log(newItem);
const [state, dispatch] = useReducer(reducer, initialState);
console.log(state.todoList);
    const handleChange = (e) => {
        setNewItem(e.target.value);
    };
    const submitItem = (e) => {
        e.preventDefault();
        setNewItem("");
    };
    return(
        <>
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
