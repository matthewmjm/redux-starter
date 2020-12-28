import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const userReducer = (state={}, action) => {
  switch(action.type){
    default:
      return state
    }
}
  
const charactersReducer = (state=[], action) => {
  switch(action.type){
    case 'SET_CHARACTERS':
      return action.payload
      case 'ADD_CHARACTER':
        return [...state, action.character]
        default:
          return state
  }
}
      
const reducer = combineReducers({
  user: userReducer,
  characters: charactersReducer
})


const store = createStore(reducer);
        
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);