import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import Registration from './app/registration/Registration';
import Layout from './components/layout/Layout';

import './index.scss';

ReactDOM.render(
    <BrowserRouter>
      <Layout>
        <Route exact path='/' component={Registration} />
      </Layout>
    </BrowserRouter>,
    document.getElementById('root')
);