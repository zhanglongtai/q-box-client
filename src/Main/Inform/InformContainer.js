import { connect } from "react-redux"
import Inform from "./Inform"
import { fetchInform } from "../../actions/mainActions";

const mapStateToProps = (state) => {
	return {
        content: state.content,
        isFetching: state.inform.isFetching,
        receiveSuccess: state.inform.receiveSuccess,
        errorMsg: state.inform.errorMsg,
		informList: state.inform.list,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchInform: () => {
			dispatch(fetchInform())
		},
	}
}

const InformContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Inform)

export default InformContainer
