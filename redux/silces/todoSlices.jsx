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
            const currentOne = state.userTodos.find((item)=>item.id === action.payload);

            state.currentTodo = currentOne;
        },

        deleteTodo: (state, action) => {
            if (!state.currentTodo.isCompleted) {
                alert("please mark the task completed");
                return;
            }
            const updatedTodos = state.userTodos.filter(element => element.id !== state.currentTodo.id && !element.isCompleted);
            state.userTodos = updatedTodos;
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