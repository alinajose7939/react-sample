import './home.css';
import React, { useEffect, useState } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = props => {

    return (
        <div className="home-card">
            <div className="home-card-container">
                <div className='list-group mb-4'>
                    <div className="title">
                        <Link
                            to={{
                                pathname: `/posts/${props.sampleData.id}`,
                            }}>
                            {props.sampleData.title}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Home;
