import {get_user,add_user_to_reducer,ADD_USER_TO_REDUCER} from '../User/action';


const initstate={


userdata:{}


}


export const userreducer=(store=initstate,action)=>{


switch (action.type) {
    case ADD_USER_TO_REDUCER:
        return {...store,userdata:{...action.payload}}
       

    default:
        return store
}


}








