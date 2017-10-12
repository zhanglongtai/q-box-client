import { connect } from "react-redux"
import Inform from "./Inform"

const mapStateToProps = (state) => {
	return {
        content: state.content,
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		activityList: () => {
// 			dispatch(activityList())
// 		},
// 	}
// }

const InformContainer = connect(
    mapStateToProps,
    null
)(Inform);

export default InformContainer;
