import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from '@src/app';
import Index from '@pages/Index';
function RouterConfig() {
    return (
        <Router>
            <App>
                <Route exact path="/" component={Index} />
            </App>
        </Router>
    );
}

export default RouterConfig;
