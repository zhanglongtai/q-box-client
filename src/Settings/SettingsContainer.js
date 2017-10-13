import { connect } from "react-redux"
import Settings from "./Settings"

const mapStateToProps = (state) => {
	return {
        content: state.content,
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		setContent: (content) => {
// 			dispatch(setContent(content))
// 		},
// 	}
// }

const SettingsContainer = connect(
    mapStateToProps,
    null
)(Settings)

function TestComponent() {
    return <h1>Hello, {props.name}</h1>;
}

export default SettingsContainer
