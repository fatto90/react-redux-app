import { Row } from 'react-bootstrap'
import store from '../redux/store'
import { updateVideo } from '../redux/videos/updateVideo'

const Video = ({ video, index }) => {
    const getVideoThumbnailUrl = (url) => {
        const videoId = url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop()
        return "//img.youtube.com/vi/" + videoId + "/0.jpg"
    }

    return (
        <Row onClick={(event) => store.dispatch(updateVideo(video.id))} className="mb-3">
            <img src={getVideoThumbnailUrl(video.url)} alt={video.title}/>
            <span>#{index + 1}</span>
            <h3>{video.title}</h3>
        </Row>
    )
}

export default Video