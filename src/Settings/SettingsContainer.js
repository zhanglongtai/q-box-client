import { connect } from "react-redux"
import { initSettings } from "../actions/settingsActions"
import Settings from "./Settings"

const mapStateToProps = (state) => {
	return {
        content: state.content,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		initSettings: (state) => {
			dispatch(initSettings(state))
        },
	}
}

const SettingsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings)

export default SettingsContainer
