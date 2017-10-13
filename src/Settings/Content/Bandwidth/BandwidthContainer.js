import { connect } from "react-redux"
import Bandwidth from "./Bandwidth"

const mapStateToProps = (state) => {
	return {
        downloadLimit: state.bandwidthTemp.downloadLimit,
        downloadDefaultLimitSpeed: state.bandwidthTemp.downloadDefaultLimitSpeed,
        downloadLimitSpeed: state.bandwidthTemp.downloadLimitSpeed,
        uploadLimit: state.bandwidthTemp.uploadLimit,
        uploadDefaultLimitSpeed: state.bandwidthTemp.uploadDefaultLimitSpeed,
        uploadLimitSpeed: state.bandwidthTemp.uploadLimitSpeed,
        lanSync: state.bandwidthTemp.lanSync,
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		setContent: (content) => {
// 			dispatch(setContent(content))
// 		},
// 	}
// }

const BandwidthContainer = connect(
    mapStateToProps,
    null
)(Bandwidth)

export default BandwidthContainer
