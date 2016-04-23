import { combineReducers } from 'redux';
import { BooksReducer } from './reducer_books';


const rootReducer = combineReducers({
  // maping the state:
  books: BooksReducer
});

export default rootReducer;
