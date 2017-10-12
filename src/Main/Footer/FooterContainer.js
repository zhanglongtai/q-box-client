import { connect } from 'react-redux'
import Footer from './Footer'

const mapStateToProps = (state) => {
	return {
		website: state.website,
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		setContent: (content) => {
// 			dispatch(setContent(content))
// 		},
// 	}
// }

const FooterContainer = connect(
    mapStateToProps,
    null
)(Footer);

export default FooterContainer;
