import { connect } from 'react-redux'
import ButtonFilter from '../components/ButtonFilter'
import { visibilityFilterActionTypes } from '../redux/visibilityFilter/visibilityFilterActions'

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch({ type: visibilityFilterActionTypes.SET_FILTER, payload: ownProps.filter})
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonFilter)