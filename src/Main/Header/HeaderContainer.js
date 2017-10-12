import { connect } from 'react-redux'
import {
    setContent,
} from '../../actions/mainActions'
import Header from './Header'

const mapStateToProps = (state) => {
	return {
		content: state.content,
		website: state.website,
		folderPath: state.folderPath,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setContent: (content) => {
			dispatch(setContent(content))
		},
	}
}

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;
