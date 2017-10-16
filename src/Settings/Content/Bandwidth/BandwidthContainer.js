import { connect } from "react-redux"
import {
    setDownloadLimit,
    setDownloadLimitSpeed,
    setUploadLimit,
    setUploadLimitSpeed,
} from "../../../actions/settingsActions";
import Bandwidth from "./Bandwidth"

const mapStateToProps = (state) => {
	return {
        downloadLimit: state.bandwidthTemp.downloadLimit,
        downloadLimitSpeedDefault: state.bandwidthTemp.downloadLimitSpeedDefault,
        downloadLimitSpeed: state.bandwidthTemp.downloadLimitSpeed,
        uploadLimit: state.bandwidthTemp.uploadLimit,
        uploadLimitSpeedDefault: state.bandwidthTemp.uploadLimitSpeedDefault,
        uploadLimitSpeed: state.bandwidthTemp.uploadLimitSpeed,
        lanSync: state.bandwidthTemp.lanSync,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setDownloadLimit: (content) => {
			dispatch(setDownloadLimit(content))
        },
        setDownloadLimitSpeed: (speed) => {
            dispatch(setDownloadLimitSpeed(speed))
        },
        setUploadLimit: (content) => {
			dispatch(setUploadLimit(content))
        },
        setUploadLimitSpeed: (speed) => {
            dispatch(setUploadLimitSpeed(speed))
        },
	}
}

const BandwidthContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Bandwidth)

export default BandwidthContainer
