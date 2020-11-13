import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* "active" is the default anyway */}
                            <li><NavLink activeClassName="active" to="/" exact
                            activeStyle={{
                              color: '#fa923f',
                              textDecoration: 'underline'
                            }}>Home</NavLink></li>
                            <li><NavLink to={{
                              // This is a dynamically-built 'relative path.' If you ever want to build a link that appends the path to the end of the current path, use this approach! Otherwise, it always generates an absolute path.
                                // pathname: this.props.match + '/new-post',
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                  <Route exact path="/" component={Posts} />
                  <Route path="/new-post" component={NewPost} />
                  <Route exact path="/posts/:id" component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;
