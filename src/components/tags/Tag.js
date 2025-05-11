import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagSelected,tagRemoved } from "../../features/filter/filterSlice";

const Tag = ({title}) => {
 const dispatch = useDispatch();
 const {tags:selectedtags} = useSelector((state) => state.filter)
 const isSelected = selectedtags.includes(title)?true:false;

 const handleSelected =()=>{
  if(isSelected){
    dispatch(tagRemoved(title))
  }
  else{
    dispatch(tagSelected(title))
  }
 }
 const style = isSelected?"px-4 py-1 rounded-full cursor-pointer bg-blue-600 text-white":"px-4 py-1 rounded-full cursor-pointer bg-blue-100 text-blue-600"
  return (
    <div>
      <div className={style} onClick={handleSelected}>
         {title}
      </div>
    </div>
  );
};

export default Tag;
