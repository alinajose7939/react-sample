import Axios from "axios"
import React, { useEffect, useState } from 'react';
import Home from "../home/home";
import NoResults from "../NoResults/NoResultsComponent";
import Pagination from "../pagination/pagination";
import './main.css';
import { Link, BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';

const Main = props => {

    useEffect(() => {
        getData();
    }, []); //to avoid infinite looping of func call 

    var url = 'https://jsonplaceholder.typicode.com/posts';

    const [sampleData, setSampleData] = useState([]);
    const [isLoaderActive, setIsLoaderActive] = useState(false);

    const [initialPage, setInitialPage] = useState(1);
    const [dataInPage] = useState(10);

    async function getData() {
        setIsLoaderActive(true);
        const result = await Axios.get(url);
        setSampleData(result.data);
        setIsLoaderActive(false);
    }

    const lastDataIndex = initialPage * dataInPage;
    const firstDataIndex = lastDataIndex - dataInPage;
    const currentPosts = sampleData.slice(firstDataIndex, lastDataIndex);

    const paginate = (pageNumber) => {
        setInitialPage(pageNumber)
    }
    return (
        <div>
            <div className="main-container">
                <div className="heading">Posts</div>
                {currentPosts && (
                    <div className="list-div">
                        {isLoaderActive && (
                            <div className="loader-container">
                                <h1>Loading...</h1>
                            </div>
                        )}
                        {currentPosts && currentPosts.length > 0
                            ? currentPosts.map(
                                (item, index) => {
                                    return (
                                        <Home
                                            sampleData={item}
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
                <Pagination
                    dataInPage={dataInPage}
                    data={sampleData.length}
                    paginate={paginate} />
            </div>
        </div>
    )
};
export default Main;
