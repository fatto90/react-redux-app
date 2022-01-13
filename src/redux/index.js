import { combineReducers } from "redux";
import videoReducer from './videos/videoReducer'
import visibilityFilterReducer from './visibilityFilter/visibilityFilterReducer'

export default combineReducers({
    videos: videoReducer,
    visibilityFilter: visibilityFilterReducer
})