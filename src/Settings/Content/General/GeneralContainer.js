import { connect } from "react-redux"
import { setLaunchAtLogin } from "../../../actions/settingsActions/index";
import General from "./General"

const mapStateToProps = (state) => {
	return {
		launchAtLogin: state.generalTemp.launchAtLogin,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setLaunchAtLogin: (bool) => {
			dispatch(setLaunchAtLogin(bool))
		},
	}
}

const GeneralContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(General)

export default GeneralContainer
