import React from 'react';
import './RepoCard.scss';
import { Edit, Star, Eye } from 'react-feather';


const RepoCard = ({ ...props }) => {
    return (
        <div className='repo-card'>
            <p>Название проекта</p>
            <div className='user'>
                <img />
                <p>Автор</p>
            </div>
            <div className='stats'>
                <span>
                    <Star />
                    <p>123</p>
                </span>
                <span>
                    <Eye />
                    <p>63</p>
                </span>
            </div>
            <div className='edit'>
                <input />
                <button>
                    <Edit color='white' />
                </button>
            </div>
        </div>
    )
}

export default RepoCard;