import Axios from "axios"
import React, { useEffect, useState } from 'react';
import './moreDetails.css';
import { Link, BrowserRouter as Router, useParams } from 'react-router-dom';

const MoreDetails = props => {

    const { id } = useParams()
    useEffect(() => {
        getDetailsOfPost();
    }, []);

    var url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    const [postData, setPostData] = useState({});
    const [isLoaderActive, setIsLoaderActive] = useState(false);

    async function getDetailsOfPost() {
        setIsLoaderActive(true);
        const result = await Axios.get(url);
        setPostData(result.data);
        setIsLoaderActive(false);
    }
    return (
        <div>
            <div className="data-container">
                <div className="data-heading">Post Details</div>
                <div className='body'>
                    {isLoaderActive && (
                        <div className="loader-container">
                            <h1>Loading...</h1>
                        </div>
                    )}
                    <div className="posts-userId">
                        <p className="posts-header"> UserID: </p>
                        <p className="posts-content">{postData.userId ? postData.userId : ""}</p>
                    </div>
                    <div className="posts-id">
                        <p className="posts-header"> Id: </p>
                        <p className="posts-content">{postData.id ? postData.id : ""}</p>
                    </div>
                    <div className="posts-title">
                        <p className="posts-header"> Title: </p>
                        <p className="posts-content">{postData.title ? postData.title : ""}</p>
                    </div>
                    <div className="posts-desc">
                        <p className="posts-header"> Desc: </p>
                        <p className="posts-content">{postData.body ? postData.body : ""}</p>
                    </div>
                </div>
            </div>
            <div className="comment-btn-container">
                <Link
                    to={{
                        pathname: `/posts/${postData.id }/comments`,
                    }}>
                    <button type="button" className="btn btn-info comment-btn">
                        Comments
                    </button>
                </Link>

            </div>

        </div>
    )
};
export default MoreDetails;
