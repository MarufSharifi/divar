import {combineReducers} from 'redux';
import ConditionReducer from '../redux/reducers/ConditionReducer';
import ThingSpecificReducer from '../redux/reducers/ThingSpecificationReducer';
import ThingReducer from '..//redux/reducers/ThingsReducer';


export default combineReducers({ConditionReducer, ThingSpecificReducer, ThingReducer});


