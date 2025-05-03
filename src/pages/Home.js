import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Tags from '../components/tags/Tags';
import Videos from '../components/videos/Videos';
import Pagination from '../components/ui/Pagination';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
           <Navbar/>
           <Tags/>
           <Videos/>
           <Pagination/>
           <Footer/>
        </div>
    );
};

export default Home;