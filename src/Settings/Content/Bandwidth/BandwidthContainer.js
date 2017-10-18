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
        downloadLimit: state.options.bandwidthTemp.downloadLimit,
        downloadLimitSpeedDefault: state.options.bandwidthTemp.downloadLimitSpeedDefault,
        downloadLimitSpeed: state.options.bandwidthTemp.downloadLimitSpeed,
        uploadLimit: state.options.bandwidthTemp.uploadLimit,
        uploadLimitSpeedDefault: state.options.bandwidthTemp.uploadLimitSpeedDefault,
        uploadLimitSpeed: state.options.bandwidthTemp.uploadLimitSpeed,
        lanSync: state.options.bandwidthTemp.lanSync,
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
