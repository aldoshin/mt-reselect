import React from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList  from './VisibleTodoList';

const TodoApp = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <br/>
    <br/>
    <br/>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoApp;
