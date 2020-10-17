import React, {useReducer} from "react";
import {toggleItem, reducer, initialState} from "../reducers/reducer";


function TodoItem (props) {
    console.log(props);

    const [state, dispatch] = useReducer(reducer, initialState);
    //console.log(state);
    
   const toggling = (itemId) => {
       state.todoList.map((item) => {
           if(itemId === item.id){
               dispatch({type: toggleItem});
           }
       })
   }

return(
    <div onClick={() => toggling(state.todoList.id)}
    className={`item${state.todoList.completed ? "completed" : ""}`}>
        <p>{props.item}</p>
    </div>
)
}

export default TodoItem;