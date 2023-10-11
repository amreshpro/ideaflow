import { createSlice } from "@reduxjs/toolkit";




const darkModeReducer = createSlice({
    name:"darkModeReducer",
    initialState:false,
    reducers:{

darkModeToggler:(state)=>{
state = !state;
return state;
}


    }
})

export const {darkModeToggler} =darkModeReducer.actions

export default darkModeReducer.reducer