import config from '../../config.json';
import { videoActionTypes } from './videoActions';

export const updateVideo = (videoId) => async (dispatch) => {
    const video = await getVideo(videoId)
    video.ranking = video.ranking + 1
    await updateServerVideoAsync(video);
    dispatch({ type: videoActionTypes.UPDATE_VIDEO, payload: video});
}

const updateServerVideoAsync = async (video) => {
    await fetch(config.serverBaseUrl + '/videos/' + video.id, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(video)
    })
}

const getVideo = async (videoId) => {
    const res = await fetch(config.serverBaseUrl + '/videos/' + videoId)
    const data = await res.json()
    return data
}