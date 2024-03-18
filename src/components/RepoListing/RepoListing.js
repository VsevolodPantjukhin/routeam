import React, { useEffect } from 'react';
import RepoCard from '../RepoCard/RepoCard'
import { useDispatch, useSelector } from 'react-redux';
import { setPage, fetchRepos, setLimit, setRepoById } from '../../redux/MainActions';
import RepoPagination from './subs/Pagination/Pagination';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import './RepoListing.scss';

const RepoListing = ({ ...props }) => {
    const [search, setSearch] = useSearchParams();
    const repos = useSelector(state => state.repos);
    const fetchingRepos = useSelector(state => state.fetchingRepos);
    const total_count = useSelector(state => state.total_count);
    const page = useSelector(state => state.page);
    const limit = useSelector(state => state.limit);
    const query = useSelector(state => state.query);
    const dispatch = useDispatch();
    const pageCount = Math.ceil(total_count / limit);
    const notify = (v) => toast(v);

    // useEffect(() => {
    //     console.log(search.get('page'),page);
    //     if (search.get('page') && page !== Number(search.get('page'))) dispatch(setPage(Number(search.get('page'))));
    //     // if (search.get('limit') && limit !== Number(search.get('limit'))) dispatch(setPage(Number(search.get('limit'))));
    //     if (search.get('q') && query !== search.get('q')) dispatch(setQuery((search.get('q'))));
    // }, [search])

    useEffect(() => {
        if (query && (repos[page] === undefined || repos[page].length === 0)) {
            dispatch(fetchRepos(query, notify, setSearch))
        }
    }, [page, query, limit])

    const saveNote = (id, comment) => dispatch(setRepoById(id, page, { note: comment }, notify))

    return (
        <div className='repo-card-listing-wrap'>
            <div className='repo-card-listing'>
                {fetchingRepos || repos[page] === undefined ?
                    <h1>Загрузка...</h1> :
                    repos[page].map((r) => (
                        <RepoCard key={r.id} {...r} saveNote={saveNote} />
                    ))
                }


            </div>
            {total_count !== 0 && <RepoPagination page={page} pageCount={pageCount} setPage={v => dispatch(setPage(v))} limit={limit} setLimit={v => dispatch(setLimit(v))} />}
        </div>

    )
}

export default RepoListing;