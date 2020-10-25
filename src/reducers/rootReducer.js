import { combineReducers } from 'redux';
import { styleReducer } from './styleReducer';


export const rootReducer = combineReducers({
    style: styleReducer,
})

