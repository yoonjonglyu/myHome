import React, { lazy, Suspense } from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';

const Main = lazy(() => import('./views/main').then((module) => ({ default: module.Main })));
const About = lazy(() => import('./views/about'));
const Portfolio = lazy(() => import('./views/portfolio').then((module) => ({ default: module.Portfolio })));
const Tech = lazy(() => import('./views/tech'));
const Essay = lazy(() => import('./views/essay'));
const NotFound = lazy(() => import('./views/notFound'));
import Loading from './components/loading';

const App: React.FC = function () {
    return (
        <Router>
            <Switch>
                <Suspense fallback={<Loading />}>
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

export default App