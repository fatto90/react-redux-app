
import { visibilityFilterActionTypes } from './visibilityFilterActions';
import { visibilityFilter } from './visibilityFilter';

const initialState = visibilityFilter.SHOW_ALL;

const visibilityFilterReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case visibilityFilterActionTypes.SET_FILTER:
            return payload;
        default:
            return state;
    }
}

export default visibilityFilterReducer;