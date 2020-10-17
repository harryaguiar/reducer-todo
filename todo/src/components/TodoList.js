import React, {useReducer} from "react";
import TodoItem from "./TodoItem";
import {reducer, initialState} from "../reducers/reducer";

function TodoList (props) {
    //console.log(props);
    
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

return(
    <div className="todo-list">
{state.todoList.map((item) => (
    <TodoItem key={item.id} item={props.newItem}/>
))}
    </div>
)
}

export default TodoList;