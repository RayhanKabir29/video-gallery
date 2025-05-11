import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/videos/videosSlice';
import tagsReducer from '../features/tags/tagsSlice';
import videoReducer from '../features/video/videoSlice';
import relatedVidoReducer from '../features/relatedVideos/relatedVideoSlice'
import filterReducer from '../features/filter/filterSlice'

export const store = configureStore({
  reducer: {
    videos : videosReducer,
    tags: tagsReducer,
    video: videoReducer,
    relatedVideos: relatedVidoReducer,
    filter:filterReducer,
  },
});
