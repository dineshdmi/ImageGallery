import React, { useState } from 'react';
import { Input, Button } from 'antd';
import './SearchBar.css'; // Import the Ant Design styles
import { SearchOutlined } from '@ant-design/icons';


const { Search } = Input;

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
        // Handle the search logic heres
        console.log('Search value:', searchValue);
    };

    return (
        <div className='search-bar-container'>
        <div style={{ margin: '20px ', width:'2000px' }}>
            <Input
                placeholder="Search For Photo"
                size="large"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            </div>  
            <div className='custom-button'>
                <Button type="primary" size="large" onClick={handleSearch} icon={<SearchOutlined />} style={{ width: '5rem' ,backgroundColor:'black'}}>
                </Button>
            </div>
        </div>
    );
};

export default SearchBar;
