import {add_product_data_to_store,ADD_PRODUCT_DATA_TO_STORE,PRODUCT_LOADING_FALSE} from "./action";



const init_state={

    productData:[],
    productloading:true


}


export const productreducer=(store=init_state,action)=>{


switch (action.type) {
    case ADD_PRODUCT_DATA_TO_STORE:
        return({...store,productData:[...action.payload]})
        case PRODUCT_LOADING_FALSE:
            return ({...store,productloading:action.payload})

    default:
        return store
}


}