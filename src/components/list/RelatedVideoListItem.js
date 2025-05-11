import { Link } from "react-router-dom";

const  RelatedVideoListItem =({relatedVideo})=> {
    return (
        <div className="w-full flex flex-row gap-2 mb-4">
            <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
                <Link to={`videos/${relatedVideo?.id}`}>
                    <img
                        src={relatedVideo?.thumbnail}
                        className="object-cover"
                        alt={relatedVideo?.title}
                    />
                </Link>
                <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                {relatedVideo?.duration}
                </p>
            </div>

            <div clas="flex flex-col w-full">
                <Link to={`videos/${relatedVideo?.id}`}>
                    <p className="text-slate-900 text-sm font-semibold">
                    {relatedVideo?.title}
                    </p>
                </Link>
                <Link
                    className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                    to={`videos/${relatedVideo?.id}`}
                >
                      {relatedVideo?.title}
                </Link>
                <p className="text-gray-400 text-xs mt-1">
                {relatedVideo?.views} .  {relatedVideo?.date}
                </p>
            </div>
        </div>
    );
}
export default RelatedVideoListItem;