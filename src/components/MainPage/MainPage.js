import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import RepoListing from "../RepoListing/RepoListing"
import './MainPage.scss';


const MainPage = ({...props})=> {
    return (
        <div className='main-page'>
            <SearchInput />
            <RepoListing />
        </div>
    )
}

export default MainPage;