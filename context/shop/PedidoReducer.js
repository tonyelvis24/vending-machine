import {
    PRODUCTS_LIST,
    PRODUCTS_LISTED
} from '../../types'


export default ( state, action ) => {
    switch(action.type) {
        case PRODUCTS_LISTED: 
            return {
                ...state,
                productsList: action.payload
            }
        case PRODUCTS_LIST: 
            return {
                ...state,
                products: action.payload
            }
       

        default: 
            return state
    }
}