import React, { lazy, Suspense } from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';

const Main = lazy(() => import('./views/main'));
const About = lazy(() => import('./views/about'));
const Portfolio = lazy(() => import('./views/portfolio'));
const Tech = lazy(() => import('./views/tech'));
const Essay = lazy(() => import('./views/essay'));
const NotFound = lazy(() => import('./views/notFound'));
const loading = () => (<h1>LOADING</h1>);

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Suspense fallback={loading()}>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/tech" component={Tech} />
                    <Route exact path="/essay" component={Essay} />
                </Suspense>
                <Route exact component={NotFound} />
            </Switch>
        </Router>
    );
};

export default App;