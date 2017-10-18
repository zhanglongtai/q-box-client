import { connect } from "react-redux"
import {
    setOption,
    setProtocol,
} from "../../../actions/settingsActions"
import Proxy from "./Proxy"

const mapStateToProps = (state) => {
	return {
        option: state.options.proxyTemp.option,
        optionDefault: state.options.proxyTemp.optionDefault,
        protocol: state.options.proxyTemp.protocol,
        protocolDefault: state.options.proxyTemp.protocolDefault,
        serverIP: state.options.proxyTemp.serverIP,
        serverIPDefault: state.options.proxyTemp.serverIPDefault,
        serverPort: state.options.proxyTemp.serverPort,
        serverPortDefault: state.options.proxyTemp.serverPortDefault,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setOption: (content) => {
			dispatch(setOption(content))
        },
        setProtocol: (protocol) => {
			dispatch(setProtocol(protocol))
		},
	}
}

const ProxyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Proxy)

export default ProxyContainer
