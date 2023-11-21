import React from 'react';
import ImageGallery from './component/ImageGallery';
import SearchBar from './component/SearchBar';
import './component/Image.css'; 
import { Button } from 'antd';

const App = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '-10px', backgroundColor: '#f0ffff', padding:'5rem' }}>
      <h1>React Image Gallery</h1>
      <SearchBar/>
      <ImageGallery />
        <Button type="primary" style={{ 
          background: 'black',
          marginTop:'-20px',
          width:'100px',
          height:'40px',
          top:'-30px'
           }}>
          Load More
        </Button>
     </div>
  );
};

export default App;
