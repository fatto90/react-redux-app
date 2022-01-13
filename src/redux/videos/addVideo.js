import config from '../../config.json';
import { videoActionTypes } from './videoActions';

export const addVideo = (url, title) => async (dispatch, getState) => {
    const videos = getState().videos;
    const newVideo = getNewVideo(url, title, videos);
    const postedVideo = await postNewVideoToServerAsync(newVideo);
    dispatch({ type: videoActionTypes.ADD_VIDEO, payload: postedVideo });
}

const postNewVideoToServerAsync = async (newVideo) => {
    const res = await fetch(config.serverBaseUrl + '/videos', {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(newVideo)
    });
    const data = await res.json();
    return data;
} 

const getNewVideo = (url, title, videos) => {
    return {
        id: getNewId(videos),
        url: url,
        title: title,
        ranking: 0
    };
}

const getNewId = (videos) => {
    let newId = Math.floor(Math.random() * 10000) + 1
    if(videos.some(video => video.id === newId)){
        newId = getNewId()
    }
    return newId
}