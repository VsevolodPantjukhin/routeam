import React, { useEffect } from 'react';
import RepoCard from '../RepoCard/RepoCard'
import { useDispatch, useSelector } from 'react-redux';
import { setPage, fetchRepos } from '../../redux/MainActions';
import RepoPagination from './subs/Pagination/Pagination';
import { toast } from 'react-toastify';
import './RepoListing.scss';

const RepoListing = ({ ...props }) => {
    const repos = useSelector(state => state.repos);
    const fetchingRepos = useSelector(state => state.fetchingRepos);
    const total_count = useSelector(state => state.total_count);
    const page = useSelector(state => state.page);
    const limit = useSelector(state => state.limit);
    const query = useSelector(state => state.query);
    const dispatch = useDispatch();
    const pageCount = Math.ceil(total_count / limit);
    const notify = (v) => toast(v);


    useEffect(() => {
        if (query && (repos[page] === undefined || repos[page].length === 0)) {
            dispatch(fetchRepos(query, notify))
        }
    }, [page, query])

    return (
        <div className='repo-card-listing'>
            {fetchingRepos || repos[page] === undefined ?
                <h1>Загрузка...</h1> :
                repos[page].map((r) => (
                    <RepoCard key={r.id} {...r} />
                ))
            }
            {total_count !== 0 && <RepoPagination page={page} pageCount={pageCount} setPage={v => dispatch(setPage(v))} />}

        </div>
    )
}

export default RepoListing;