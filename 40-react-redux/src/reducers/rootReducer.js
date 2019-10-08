import { combineReducers } from 'redux';
import characters from './charReducer';
import movies from './moviesReducer';

export default combineReducers({
  characters, 
  movies
})