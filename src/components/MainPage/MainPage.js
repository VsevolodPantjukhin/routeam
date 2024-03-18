import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import RepoListing from "../RepoListing/RepoListing"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MainPage.scss';


const MainPage = ({...props})=> {
    return (
        <div className='main-page'>
            <SearchInput />
            <RepoListing />
            <ToastContainer />
        </div>
    )
}

export default MainPage;