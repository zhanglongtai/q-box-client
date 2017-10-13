import { connect } from 'react-redux'
import { setSync } from "../../actions/mainActions";
import Footer from './Footer'

const mapStateToProps = (state) => {
	return {
		website: state.website,
		sync: state.sync,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setSync: (bool) => {
			dispatch(setSync(bool))
		},
	}
}

const FooterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);

export default FooterContainer;
