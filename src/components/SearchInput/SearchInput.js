import React from 'react';
import './SearchInput.scss';
import { Search } from 'react-feather';

const SearchInput = ({ ...props }) => {
    return (
        <div className="search-input">
            <div className='search-input-container'>
                <input placeholder='Начните вводить текст для поиска (не менее трех символов)' />
                <button>
                    <Search color='white' />
                </button>
            </div>
        </div>
    )
}

export default SearchInput;