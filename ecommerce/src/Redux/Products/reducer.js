import {add_product_data_to_store,ADD_PRODUCT_DATA_TO_STORE,PRODUCT_LOADING_FALSE,ASCENDING_PRICE,DESCENDING_PRICE,ASCENDING_NAME} from "./action";



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
            case ASCENDING_PRICE:
            
                return({...store,productData:[...action.payload]})
                case DESCENDING_PRICE:
                    return({...store,productData:[...action.payload]})
                    case ASCENDING_NAME:
                        return ({...store,productData:[...action.payload]})
    default:
        return store
}


}