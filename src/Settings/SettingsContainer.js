import { connect } from "react-redux"
import Settings from "./Settings"

const mapStateToProps = (state) => {
	return {
        content: state.content,
	}
}

const SettingsContainer = connect(
    mapStateToProps,
    null
)(Settings)

export default SettingsContainer
