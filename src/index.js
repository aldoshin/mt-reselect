import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import './index.css';

import TodoApp from './App';
import {todos, visibilityFilter} from './reducers';
import registerServiceWorker from './registerServiceWorker';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});


ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
