import {get_user,add_user_to_reducer,GET_USER,ADD_USER_TO_REDUCER} from './action/';


const initstate={


userdata:{}


}


export const userreducer=(store=initstate,action)=>{


switch (action.type) {
    case "GET_USER":
        return {...store,userdata:{...action.payload}}
       

    default:
        return store
}


}








