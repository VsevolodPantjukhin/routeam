import React, { useState, useEffect } from 'react';
import './SearchInput.scss';
import { Search } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery } from '../../redux/MainActions';

const SearchInput = ({ ...props }) => {
    const [value, setValue] = useState('');
    const fetchingRepos = useSelector(state => state.fetchingRepos);
    const query = useSelector(state => state.query);
    const dispatch = useDispatch();

    useEffect(() => {
        setValue(query)
    },[query])

    const handleSearch = e => {
        if (fetchingRepos) return;
        let v = value.trim();
        setValue(v);
        dispatch(setQuery(v))
    }

    return (
        <div className="search-input">
            <div className='search-input-container'>
                <input value={value} onChange={e => setValue(e.target.value)} placeholder='Начните вводить текст для поиска (не менее трех символов)' />
                <button onClick={handleSearch}>
                    <Search color='white' />
                </button>
            </div>
        </div>
    )
}

export default SearchInput;