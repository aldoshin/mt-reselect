import React from 'react';
import {connect} from 'react-redux';

import Todo from './Todo';
// import {getVisibleTodos} from './selectors';
import {getVisibleTodosSelector} from './selectors';

const TodoList = ({ todos, onTodoClick}) => (
  <ul>
    {
      todos.map(todo =>
        <Todo
          key={todo.id}
          { ...todo}
          onClick = {() => onTodoClick(todo.id)}
        />
      )
    }
  </ul>
);

//No Selector Logic inside the component
// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos,
//     visibilityFilter: state.visibilityFilter
//   }
// }

//todos is calculated every time the state tree is updated.
//If the state tree is large, or the calculation expensive,
//repeating the calculation on every update may cause performance problems
const mapStateToProps = (state) => {
  return {
    // todos: getVisibleTodos(state.todos, state.visibilityFilter)
    todos: getVisibleTodosSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch({
        type: 'TOGGLE_TODO',
        id
      });
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
