import {
    SET_PAGE,
    SET_LIMIT,
    SET_QUERY,
    FECTH_REPOS,
    FECTH_REPOS_SUCCESS,
    FECTH_REPOS_FAILED
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

const initialState = {
    page: 1,
    // searchValue: '',
    query: '',
    limit: 6,
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
        //   case ActionTypes.ADD_TODO:
        //     const text = action.text.trim()
        //     return [...state, text]
        default:
            return state
    }
}