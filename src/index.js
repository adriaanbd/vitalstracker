import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import App from './App';
import './index.css';

const root = document.getElementById('root');
const app = (<Provider store={store}><Router><App /></Router></Provider>);

ReactDOM.render(app, root);
