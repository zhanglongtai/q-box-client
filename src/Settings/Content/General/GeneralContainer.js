import { connect } from "react-redux"
import General from "./General"

const mapStateToProps = (state) => {
	return {
		launchAtLogin: state.generalTemp.launchAtLogin,
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		setContent: (content) => {
// 			dispatch(setContent(content))
// 		},
// 	}
// }

const GeneralContainer = connect(
    mapStateToProps,
    null
)(General)

export default GeneralContainer
