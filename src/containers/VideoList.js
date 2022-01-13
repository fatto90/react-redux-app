import { connect } from 'react-redux'
import VideoList from '../components/VideoList'
import { visibilityFilter } from '../redux/visibilityFilter/visibilityFilter'
import { fetchVideos } from '../redux/videos/fetchVideos';

const getFilteredVideos = (state, videos, filter) => {
    console.log(state);
    switch(filter) {
        case visibilityFilter.SHOW_ALL:
            return videos;
        case visibilityFilter.SHOW_LASTTHREE:
            return videos.slice(videos.length - 3, videos.length);
        case visibilityFilter.SHOW_TOPTHREE:
            return videos.slice(0, 3);
        default:
            return videos;
    }
}

const mapStateToProps = state => ({
    videos: getFilteredVideos(state, state.videos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoList)