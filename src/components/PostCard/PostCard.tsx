import React from 'react'

import { TPost } from '../../types/types'

import postImg from '../../assets/images/heh.svg'

import './postcard.scss'

interface PostProps {
    post: TPost
}

const Post: React.FC<PostProps> = ({ post }) => {
    return (
        <div className="news__card">
            <div className="news__post-photo">
                <div className="news__photo">
                    <img
                        src={postImg}
                        alt="post"
                    />
                </div>
            </div>
            <div className="news__degree">{post.id}</div>
            <div className="news__title">{post.title}</div>
            <div className="news__text">{post.body}</div>
        </div>
    )
}

export default Post
