import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedVideoAPi";

const initialState ={
    relatedVideos:[],
    isLoading: false,
    isError:false,
    erro:"",

};
export const fetchRelatedVideos = createAsyncThunk('relatedVideos/fetchRelatedVideos',
    async(tags,id) =>{
        const relatedVideos = await getRelatedVideos({tags,id});
        return relatedVideos;
    }
)
const relatedVideoSlice = createSlice({
    name: "relatedVideos",
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(fetchRelatedVideos.pending,(state)=>{
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchRelatedVideos.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.relatedVideos = action.payload;
        })
        .addCase(fetchRelatedVideos.rejected,(state,action)=>{
            state.isError = false;
            state.relatedVideos = [];
            state.isError = true;
            state.erro = action.error?.message
        })
    }
});

export default relatedVideoSlice.reducer;