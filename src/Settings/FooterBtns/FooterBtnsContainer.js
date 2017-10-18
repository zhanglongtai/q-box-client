import { connect } from "react-redux"
import {
    cancelSettings,
    confirmSettings,
} from "../../actions/settingsActions"
import FooterBtns from "./FooterBtns"
import { log } from "../../utils"

const mapStateToProps = (state) => {
	return {
        options: state.options,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		cancelSettings: (state) => {
			dispatch(cancelSettings(state))
        },
        confirmSettings: (state) => {
			dispatch(confirmSettings(state))
        },
	}
}

const FooterBtnsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FooterBtns)

export default FooterBtnsContainer
