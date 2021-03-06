
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Login'
import AdminIndex from './AdminIndex'
import AddArticle from './AddArticle'
import ArticleList from './ArticleList'
function Main() {
    return (
        <Router>
            <Route path="/" exact component={Login} />

            <Route path="/index/"  component={AdminIndex} />

            
        </Router>
    )
}
export default Main