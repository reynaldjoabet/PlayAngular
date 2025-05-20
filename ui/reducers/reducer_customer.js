
import _ from 'lodash';
import { setFailureState, setLoadingState,setSuccessState,setLoadingState,setPromiseResponse} from  '../../PromiseUtils';
import { 
    VALIDATE_FROM_TOKEN,
    VALIDATE_FROM_TOKEN_RESPONSE,
    REGISTER,
    REGISTER_RESPONSE,
    FETCH_PASSWORD_POLICY,
    FETCH_PASSWORD_POLICY_RESPONSE,
    FETCH_ADMIN_NOTIFICATIONS,
    FETCH_ADMIN_NOTIFICATIONS_RESPONSE,
    LOGIN,
    LOGIN_RESPONSE,
    INVALID_CUSTOMER_TOKEN,
    RESET_TOKEN_ERROR,
    RESET_CUSTOMER,
    LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
} from '../actions/customers';
var INITIAL_STATE = {
}
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case VALIDATE_FROM_TOKEN:
            return setLoadingState(state, 'currentCustomer', {});
        case VALIDATE_FROM_TOKEN_RESPONSE:
            return setPromiseResponse(state, 'currentCustomer', action);
        case REGISTER:
            return setLoadingState(state, 'authToken', {});
        case REGISTER_RESPONSE:
            return setPromiseResponse(state, 'authToken', action);
        
    }
}
