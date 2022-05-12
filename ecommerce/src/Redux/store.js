import   {createStore,combineReducers,applyMiddleware}    from 'redux';
import { productreducer } from './Products/reducer';
import {userreducer} from './User/reducer';
import thunk from 'redux-thunk'


const combinedreducer=combineReducers({productreducer,userreducer})



export const store=createStore(combinedreducer,applyMiddleware(thunk))



