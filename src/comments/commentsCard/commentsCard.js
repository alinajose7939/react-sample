import './commentsCard.css';
import React, { useEffect, useState } from 'react';

const CommentsCard = props => {

    return (
        <div className="card comment-card">
            <div className="comment-card-container">
                <div className="list-group mb-4">
                    <div className="comment-list">
                        <div className="comment-name">
                            <p className="comment-header"> Name: </p>
                            <p className="comment-content">{props.comment.name? props.comment.name : ''}</p>
                        </div>
                        <div className="comment-body">
                            <p className="comment-header"> Comment: </p>
                            <p className="comment-content">{props.comment.body ? props.comment.body : ''}</p>                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default CommentsCard;
