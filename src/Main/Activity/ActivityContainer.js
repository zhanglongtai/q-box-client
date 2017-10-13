import { connect } from 'react-redux'
import {
    fetchActivity,
} from '../../actions/mainActions'
import Activity from './Activity'

const mapStateToProps = (state) => {
	return {
        content: state.content,
		isFetching: state.recentActivity.isFetching,
        receiveSuccess: state.recentActivity.receiveSuccess,
        errorMsg: state.recentActivity.errorMsg,
		fileList: state.recentActivity.list,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchActivity: () => {
			dispatch(fetchActivity())
		},
	}
}

const ActivityContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Activity)

export default ActivityContainer
