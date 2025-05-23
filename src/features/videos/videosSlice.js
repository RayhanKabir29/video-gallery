import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosApi";

const initialState ={
    videos:[],
    isLoading: false,
    isError:false,
    erro:"",

};
export const fetchVideos = createAsyncThunk('videos/fetchVideos',
    async({tags,search}) =>{
        const videos = await getVideos(tags,search);
        return videos;
    }
)
const videoSlice = createSlice({
    name: "videos",
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(fetchVideos.pending,(state)=>{
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchVideos.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.videos = action.payload;
        })
        .addCase(fetchVideos.rejected,(state,action)=>{
            state.isError = false;
            state.videos = [];
            state.isError = true;
            state.erro = action.error?.message
        })
    }
});

export default videoSlice.reducer;