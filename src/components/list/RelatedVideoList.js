import RelatedVideoListItem from "./RelatedVideoListItem";
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from "react";
import { fetchRelatedVideos } from "../../features/relatedVideos/";

const RelatedVideoList = ({ tags, id }) => {
  const dispatch = useDispatch();
  const {relatedVideos,isError,isLoading,error} = useSelector(state =>state.relatedVideos)

  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id }));
  }, [dispatch, tags, id]);
  let content = null;
  if (isLoading) content = <div className="col-span-12">Loading...</div>;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && relatedVideos?.length ===0)
    content = <div className="col-span-12">No Video Found</div>;
  if (!isLoading && !isError &&relatedVideos?.length>0)
    content = relatedVideos?.map((relatedVideo)=><RelatedVideoListItem key={relatedVideo?.id} relatedVideo={relatedVideo}/>)
   return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};
export default RelatedVideoList;
