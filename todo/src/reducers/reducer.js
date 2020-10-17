export const addItem = "ADD_TODO";
export const clearCompleted = "CLEAR_COMPLETED";
export const toggleItem = "TOGGLE_ITEM";

export const initialState = {
    todoList: [{
        item: 'Learn about reducers',
        completed: false,
        id: Date.now()
      }]
}
export const reducer = (state, action) => {
switch(action.type){
    case addItem:
        return{
            ...state,
            todoList: [...state.todoList, {
            item: action.payload,
            completed: false}
            ]
        }
    case clearCompleted:
        return{
            ...state,
            todoList: [{...state.todoList,
            completed: !state.todoList.completed
            }]
        }    
    default:
        return state
}
}