import { createSlice } from "@reduxjs/toolkit"
import { act } from "react";


const initialState={
  activeRequests:0,
  error:null,
}

const globalSlice=createSlice({
  name:"global",
  initialState,
  reducers:{
    startLoading:(state)=>{
      state.activeRequests +=1;
    },
    stopLoading: (state)=>{
      if(state.activeRequests>0){
        state.activeRequests -=1;
      }
    },
    setGlobalError:(state,action)=>{
      state.error=action.payload;
    },
    clearGlobalError:(state)=>{
      state.error=null;
    },
  },

});

export const {startLoading,stopLoading,setGlobalError,clearGlobalError}=globalSlice.actions;
export default globalSlice.reducer;