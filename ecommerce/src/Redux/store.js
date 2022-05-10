import   {createStore,combineReducers,applyMiddleware}    from 'redux';
import { productreducer } from './Products/reducer';
import thunk from 'redux-thunk'






export const store=createStore(productreducer,applyMiddleware(thunk))



