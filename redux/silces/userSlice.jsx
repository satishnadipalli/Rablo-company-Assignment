const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    currentUser:null
}

const userSlice = createSlice({
    name :"user",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.currentUser = action.payload;
        }
    }
});

export const {addUser} = userSlice.actions;
export default userSlice.reducer;