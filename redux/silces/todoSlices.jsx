const { createSlice, current } = require("@reduxjs/toolkit");

const initialState = {
    userTodos : [],
    currentTodo:null
}

const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.userTodos.push(action.payload);
        },
        setCurrentTodo:(state,action)=>{
            state.currentTodo = action.payload;
        }
        ,
        deleteTodo: (state, action) => {
            // Find the todo item to delete
            const deletedTodoIndex = state.userTodos.findIndex(item => item.id === action.payload);
        
            // If the todo item is not found, return the current state
            if (deletedTodoIndex === -1) {
                return state;
            }
        
            // If the found todo item is not completed, return the current state
            if (!state.userTodos[deletedTodoIndex].isCompleted) {
                console.log("returned");
                return state;
            }
        
            // Remove the completed todo item from userTodos
            const updatedTodos = state.userTodos.filter(item => item.id !== action.payload);
        
            // Return the updated state
            return {
                ...state,
                userTodos: updatedTodos
            };
        },        
        updateIsCompleted: (state, action) => {
            const updatedTodos = state.userTodos.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        isCompleted: !item.isCompleted
                    };
                }
                
                return item;
            });
        
            state.userTodos = updatedTodos;
        },        
        updateTodo: (state, action) => {
            state.userTodos = state.userTodos.map((item) => {
              if (item.id === state.currentTodo.id) {
                return {
                  ...item,
                  desc: action.payload
                };
              }
              return item;
            });
          }
    }
});

export const {addTodo,deleteTodo,updateIsCompleted,updateTodo,setCurrentTodo,} = todoSlice.actions;
export default todoSlice.reducer;