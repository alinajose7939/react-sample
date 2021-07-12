import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './home/home';
import Main from './main/main';
import MoreDetails from './moreDetails/moreDetails';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Comments from './comments/comments';

function App() {

  return (
    <div className="App">
      {/* <Main /> */}
      <Router>
        <div>
          <Switch>
              <Route exact path='/posts/:id' component={MoreDetails} />
              <Route exact path='/posts/:id/comments' component={Comments} />
              <Route path='/' component={Main} />

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
