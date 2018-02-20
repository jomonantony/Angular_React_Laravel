require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Example from './components/Example';
import Master from './components/Master';
import CreateItem from './components/CreateItem';
import DisplayItem from './components/DisplayItem';
import EditItem from './components/EditItem';

//render(<Example />, document.getElementById('example'));
//Router for the navigation purpose
render(
        <Router history={browserHistory}>
            <Route path="/" component={Master} >
                <Route path="/add-item" component={CreateItem} />
                <Route path="/edit/:id" component={EditItem} />
                <Route path="/display-item" component={DisplayItem} />
            </Route>
        </Router>,
        document.getElementById('masterdiv'));
