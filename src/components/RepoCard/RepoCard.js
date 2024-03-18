import React, { useState } from 'react';
import './RepoCard.scss';
import { Edit, Star, Eye } from 'react-feather';

const RepoCard = ({ id, name, clone_url, stargazers_count, watchers_count, owner, note, saveNote, ...props }) => {
    const [comment, setComment] = useState(note);
    const redirect = (url) => {
        window.open(url, '_blank');
    }

    return (
        <div className='repo-card'>
            <p onClick={() => redirect(clone_url)}>{name}</p>
            <div className='user'>
                <img onClick={() => redirect(owner.html_url)} src={owner.avatar_url} />
                <p>{owner.login}</p>
            </div>
            <div className='stats'>
                <span>
                    <Star />
                    <p>{stargazers_count}</p>
                </span>
                <span>
                    <Eye />
                    <p>{watchers_count}</p>
                </span>
            </div>
            <div className='edit'>
                <input value={comment} onChange={e => setComment(e.target.value)} />
                <button>
                    <Edit onClick={() => saveNote(id, comment)} color='white' />
                </button>
            </div>
        </div>
    )
}

export default RepoCard;