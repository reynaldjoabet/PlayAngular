
import { combineReducers } from 'redux';
import { FeatureFlag } from './feature';
import { reducer as formReducer } from 'redux-form';    
import  CustomerReducer  from './reducer_customer'; // another reducer
const rootReducer = combineReducers({
    customer: CustomerReducer,
    form: formReducer,
    feature: FeatureFlag
});

export default rootReducer;