import React from 'react';
import RepoCard from '../RepoCard/RepoCard'
import './RepoListing.scss';

const RepoListing = ({...props})=> {
    return (
        <div className='repo-card-listing'>
           <RepoCard />
           <RepoCard />
           <RepoCard />
           <RepoCard />
           <RepoCard />
           <RepoCard />
        </div>
    )
}

export default RepoListing;