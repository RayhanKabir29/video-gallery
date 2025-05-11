import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./videoApi";

const initialState ={
    video:{},
    isLoading: false,
    isError:false,
    erro:"",

};
export const fetchVideo = createAsyncThunk('video/fetchVideos',
    async(id) =>{
        const video = await getVideo(id);
        return video;
    }
)
const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(fetchVideo.pending,(state)=>{
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchVideo.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.video = action.payload;
        })
        .addCase(fetchVideo.rejected,(state,action)=>{
            state.isError = false;
            state.video = {};
            state.isError = true;
            state.erro = action.error?.message
        })
    }
});

export default videoSlice.reducer;