import React, {useReducer} from "react";
import TodoItem from "./TodoItem";
import {addItem, clearCompleted, toggleItem, reducer, initialState} from "../reducers/reducer";

function TodoList (props) {
    //console.log(props);
    const [state, dispatch] = useReducer(reducer, initialState);
return(
    <div className="todo-list">
{state.todoList.map((item) => (
    <div>
        <p>{item.item}</p>
    </div>
    // <TodoItem key={item.id} item={item} toggleItem={props.toggleItem}/>
))}
    </div>
)
}

export default TodoList;