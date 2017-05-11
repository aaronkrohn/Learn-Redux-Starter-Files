import React from 'react';
import { render } from 'react-dom';

//Import css
import css from './styles/style.styl';

//Import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import react rounter
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postid" component={Single}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));
