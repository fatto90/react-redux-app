import { videoActionTypes } from './videoActions';

const initialState = []

const videoReducer = (state = initialState, {type, payload}) => {
    let sortedVideos = [];
    switch(type){
        case videoActionTypes.VIDEO_LOADED:
            sortedVideos = sortByRankings(payload);
            break;
        case videoActionTypes.UPDATE_VIDEO:
            const updatedVideo = payload;
            sortedVideos = sortByRankings(state.map((video) => video.id === updatedVideo.id ? updatedVideo : video));
            break;
        case videoActionTypes.ADD_VIDEO:
            const addedVideo = payload;
            sortedVideos = sortByRankings([...state, addedVideo]);
            break;
        default:
            return state;
    }    
    return sortedVideos;
}

const sortByRankings = (elements) => {
    return elements.sort(function(v1, v2) {
        return v2.ranking - v1.ranking
    })
}

export default videoReducer;