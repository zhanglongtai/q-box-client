import { connect } from "react-redux"
import Account from "./Account"

const mapStateToProps = (state) => {
	return {
		space: state.options.accountTemp.space,
        relevance: state.options.accountTemp.relevance,
        email: state.options.accountTemp.email,
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
