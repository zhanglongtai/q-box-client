import { connect } from "react-redux"
import {
    setOption,
    setProtocol,
} from "../../../actions/settingsActions"
import Proxy from "./Proxy"

const mapStateToProps = (state) => {
	return {
        option: state.proxyTemp.option,
        optionDefault: state.proxyTemp.optionDefault,
        protocol: state.proxyTemp.protocol,
        protocolDefault: state.proxyTemp.protocolDefault,
        serverIP: state.proxyTemp.serverIP,
        serverIPDefault: state.proxyTemp.serverIPDefault,
        serverPort: state.proxyTemp.serverPort,
        serverPortDefault: state.proxyTemp.serverPortDefault,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setOption: (content) => {
			dispatch(setOption(content))
		},
	}
}

const ProxyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Proxy)

export default ProxyContainer
