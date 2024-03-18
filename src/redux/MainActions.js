import {
    SET_PAGE,
    SET_LIMIT,
    SET_QUERY,
    FECTH_REPOS,
    FECTH_REPOS_SUCCESS,
    FECTH_REPOS_FAILED,
    ENDPOINT_URL,
    SET_REPO_BY_ID
} from './MainConstants';
import axios from 'axios';

export const fetchRepos = (value, notify, setSearch) => (dispath, getState) => {
    dispath(beginFetchRepos(value));
    const { page, limit } = getState();
    const q = new URLSearchParams();
    q.append('q', value);
    q.append('page', page);
    q.append('per_page', limit);
    setSearch({ page, limit, q: value })
    axios.get(`${ENDPOINT_URL}?${q.toString()}`).then((response) => {
        notify("Успех!");
        dispath(successFetchRepos(response.data));
    }).catch(e => {
        notify(e.toString())
        dispath(failedFetchRepos())
    })
}

export const beginFetchRepos = (query) => ({
    type: FECTH_REPOS,
    data: { query }
});

export const failedFetchRepos = () => ({
    type: FECTH_REPOS_FAILED,
});

export const successFetchRepos = (data) => ({
    type: FECTH_REPOS_SUCCESS,
    data,
});

export const setPage = (page) => ({
    type: SET_PAGE,
    data: { page }
});

export const setQuery = (query) => ({
    type: SET_QUERY,
    data: { query }
});

export const setLimit = (limit) => ({
    type: SET_LIMIT,
    data: { limit }
});

export const setRepoById = (id, page, batch, notify) => ({
    type: SET_REPO_BY_ID,
    data: { id, page, batch, notify }
});