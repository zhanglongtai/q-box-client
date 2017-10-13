import { connect } from "react-redux"
import Account from "./Account"

const mapStateToProps = (state) => {
	return {
		space: state.accountTemp.space,
        relevance: state.accountTemp.relevance,
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		setContent: (content) => {
// 			dispatch(setContent(content))
// 		},
// 	}
// }

const AccountContainer = connect(
    mapStateToProps,
    null
)(Account)

export default AccountContainer
