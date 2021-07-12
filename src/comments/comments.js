import Axios from "axios"
import React, { useEffect, useState } from 'react';
import './comments.css';
import CommentsCard from "./commentsCard/commentsCard";
import { Link, BrowserRouter as Router, useParams } from 'react-router-dom';
import NoResults from "../NoResults/NoResultsComponent";

const Comments = props => {

    const { id } = useParams()
    useEffect(() => {
        getCommentsOfPost();
    }, []); //to avoid infinite looping of func call 

    var url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;

    const [commentData, setCommentData] = useState([]);
    const [isLoaderActive, setIsLoaderActive] = useState(false);

    async function getCommentsOfPost() {
        setIsLoaderActive(true);
        const result = await Axios.get(url);
        setCommentData(result.data);
        setIsLoaderActive(false);
    }

    return (
        <div>
            <div className="comment-list-container">
                <div className="comments-heading">Comments</div>
                {commentData && (
                    <div className="list-div">
                        {isLoaderActive && (
                            <div className="loader-container">
                                <h1>Loading...</h1>
                            </div>
                        )}
                        {commentData && commentData.length > 0
                            ? commentData.map(
                                (item, index) => {
                                    return (
                                        <CommentsCard
                                            comment={item}
                                            key={index} />
                                    );
                                }
                            )
                            : (
                                <span>
                                    <NoResults></NoResults>
                                </span>
                            )
                        }
                    </div>
                )}
            </div>
        </div>
    )
};
export default Comments;
