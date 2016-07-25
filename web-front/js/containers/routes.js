import React from 'react';
import {Router, Route, IndexRoute, Redirect, IndexRedirect, browserHistory, applyRouterMiddleware} from 'react-router';
import useScroll from 'react-router-scroll';

import App from './App';

import TopPage from './top/TopPage';

browserHistory.listen(location => (
  window.ga ? window.ga('set', 'page', location.pathname) : null));

const scroll = useScroll((prevRouterProps, {routes}) => {
  return !(routes.length == 3 && routes[1].path == 'courses/:category/:area/:id');
});


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={TopPage}/>

    <Redirect from="*" to="/"/>
  </Route>
);

export default class Routes extends React.Component {

  render() {
    return (
      <Router
        history={browserHistory}
        routes={routes}
        render={applyRouterMiddleware(scroll)}
      />
    );
  }
}
