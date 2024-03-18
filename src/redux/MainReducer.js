import {
    SET_PAGE,
    SET_LIMIT,
    SET_QUERY,
    FECTH_REPOS,
    FECTH_REPOS_SUCCESS,
    FECTH_REPOS_FAILED,
    SET_REPO_BY_ID
} from './MainConstants'

function initOwner({ id, html_url, avatar_url, login }) {
    return ({
        id,
        html_url,
        avatar_url,
        login
    })
}
function initRepo({ id, name, clone_url, stargazers_count, watchers_count, owner }) {
    return ({
        id,
        name,
        clone_url,
        stargazers_count,
        watchers_count,
        owner: initOwner(owner),
        note: '',
    })
}

const getValueFromSearch = key => {
    const q = new URLSearchParams(window.location.search);
    if (q.has(key)) return q.get(key);
    return undefined;
}

const initialState = {
    page: getValueFromSearch('page') ? Number(getValueFromSearch('page')) : 1,
    // searchValue: '',
    query: getValueFromSearch('q') || '',
    limit: getValueFromSearch('limit') ? Number(getValueFromSearch('limit')) : 6,
    repos: { 1: [] },
    total_count: 0,
    fetchingRepos: false,
}

export function main(state = initialState, action) {
    switch (action.type) {
        case FECTH_REPOS:
            return ({ ...state, fetchingRepos: true, query: action.data.query })
        case FECTH_REPOS_SUCCESS:
            const rps = action.data.items.map(it => initRepo({ ...it }))
            return ({ ...state, fetchingRepos: false, total_count: action.data.total_count, repos: { ...state.repos, [state.page]: rps } })
        case FECTH_REPOS_FAILED:
            return ({ ...state, fetchingRepos: false, total_count: 0, repos: [] })
        case SET_PAGE:
            return ({ ...state, page: action.data.page });
        case SET_QUERY:
            return ({ ...state, query: action.data.query, page: 1, repos: { 1: [] } });
        case SET_LIMIT:
            return ({ ...state, limit: action.data.limit, page: 1, repos: { 1: [] } });
        case SET_REPO_BY_ID:
            const cp = state.repos[action.data.page];
            const swap = [];
            if (cp.length > 0) {
                for (let i = 0; i < cp.length; i++) {
                    swap.push(cp[i].id === action.data.id ? { ...cp[i], ...action.data.batch } : cp[i]);
                }
            }
            action.data.notify("Коммент сохранен")
            return ({ ...state, repos: { ...state.repos, [action.data.page]: swap } });
        default:
            return state
    }
}