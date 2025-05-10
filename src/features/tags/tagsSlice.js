import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./tagsApi";

const initialState ={
    tags:[],
    isLoading: false,
    isError:false,
    erro:"",

};
export const fetchTags = createAsyncThunk('tags/fetchTags',
    async() =>{
        const tags = await getTags();
        return tags;
    }
)
const videoSlice = createSlice({
    name: "tags",
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(fetchTags.pending,(state)=>{
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchTags.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.videos = action.payload;
        })
        .addCase(fetchTags.rejected,(state,action)=>{
            state.isError = false;
            state.videos = [];
            state.isError = true;
            state.erro = action.error?.message
        })
    }
});

export default videoSlice.reducer;