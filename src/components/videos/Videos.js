import  { useEffect } from "react";
import Video from "./Video";
import {useDispatch, useSelector} from "react-redux"
import { fetchVideos } from "../../features/videos/videosSlice";
const Videos = () => {
  const dispatch = useDispatch();
  const {videos,isLoading,isError,error} = useSelector(state=> state.videos);
 const {tags,search} = useSelector((state)=>state.filter);

  useEffect(()=>{
    dispatch(fetchVideos({tags,search}))
  },[dispatch,tags,search]);

  let content;
  if(isLoading) content = <div className="col-span-12">Loading...</div>;
  if(!isLoading &&isError) content= <div className="col-span-12">{error}</div>;
  if(!isLoading &&!isError && videos?.length=== 0) content= <div className="col-span-12">No Video Found</div>;
  if(!isLoading &&!isError && videos?.length>0) content=  videos?.map((video)=><Video key={video?.id} video={video}/>);
  return (
    <div>
      <section className="pt-12">
        <section className="pt-12">
          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {content}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Videos;
