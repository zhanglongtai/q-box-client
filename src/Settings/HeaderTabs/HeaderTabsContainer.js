import { connect } from "react-redux"
import {
    setContent,
} from "../../actions/settingsActions"
import HeaderTabs from "./HeaderTabs"
import { log } from "../../utils"

const mapStateToProps = (state) => {
	log('state', state)
	return {
        content: state.content,
        contentList: state.contentList,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setContent: (content) => {
			dispatch(setContent(content))
		},
	}
}

const HeaderTabsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderTabs)

export default HeaderTabsContainer
