import Video from './Video'
import PropTypes from 'prop-types'
//import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const VideoList = ({ videos, fetchVideos }) => {
    //const videos = useSelector((state) => state.videos);
    useEffect(() => {
        fetchVideos();
    }, []);

    return (
        <div className='text-center'>
            {videos.map((video) => (
                <Video key={video.id} video={video} index={videos.indexOf(video)} />
            ))}
        </div>
    )
}

VideoList.propTypes = {
    videos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        ranking: PropTypes.number.isRequired
      }).isRequired).isRequired
}

export default VideoList