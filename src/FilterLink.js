import React from 'react';
import {connect} from 'react-redux';

import {makeIsFilterActive} from './selectors';

const Link = ({active, children, onClick}) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a href='#'
       onClick={(e) => {
         e.preventDefault();
         onClick();
       }}>
      {children}
    </a>
  );
};

const makeMapStateToProps = () => {
  const isFilterActive = makeIsFilterActive();
  const mapStateToProps =  ( state, props ) => {
    return {
      active: isFilterActive(state, props)
    };
  };
  return mapStateToProps
}


const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: props.filter
      });
    }
  };
}

export default connect(makeMapStateToProps, mapDispatchToProps)(Link);
