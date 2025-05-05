import React from 'react';
import Tags from '../components/tags/Tags';
import Videos from '../components/videos/Videos';
import Pagination from '../components/ui/Pagination';


const Home = () => {
    return (
        <div>
           
           <Tags/>
           <Videos/>
           <Pagination/>
          
        </div>
    );
};

export default Home;