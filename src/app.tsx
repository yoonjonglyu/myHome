import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './views/main';
import About from './views/about';
import Portfolio from './views/portfolio';
import Tech from './views/tech';
import Essay from './views/essay';
import NotFound from './views/notFound';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/tech" component={Tech} />
                <Route exact path="/essay" component={Essay} />
                <Route exact component={NotFound} />
            </Switch>
        </Router>
    );
};

export default App;