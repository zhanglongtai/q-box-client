import { connect } from "react-redux"
import Sync from "./Sync"

const mapStateToProps = (state) => {
	return {
        path: state.syncTemp.path,
        defaultPath: state.syncTemp.defaultPath,
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		setContent: (content) => {
// 			dispatch(setContent(content))
// 		},
// 	}
// }

const SyncContainer = connect(
    mapStateToProps,
    null
)(Sync)

export default SyncContainer
