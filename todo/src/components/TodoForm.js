import React, {useState} from "react";


function TodoForm(props) {
    const [newItem, setNewItem] = useState("");
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
            <button onClick={() => props.addItem(newItem)} className="add-item">Add New Item</button>
            <br />
            <button onClick={(e) => props.clearCompleted(e)} className="clear-items">Clear Completed Item(s)</button>
        <br/>
        </form>
        </>
    )
};



export default TodoForm;
