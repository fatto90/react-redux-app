import config from '../../config.json';
import { videoActionTypes } from './videoActions';

export const fetchVideos = () => async (dispatch) => {
    const res = await fetch(config.serverBaseUrl + '/videos');
    const data = await res.json();
    dispatch({ type: videoActionTypes.VIDEO_LOADED, payload: data });
}