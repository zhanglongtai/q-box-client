import { connect } from "react-redux"
import Proxy from "./Proxy"

const mapStateToProps = (state) => {
	return {
        option: state.proxyTemp.option,
        defaultOption: state.proxyTemp.defaultOption,
        protocol: state.proxyTemp.protocol,
        defaultProtocol: state.proxyTemp.defaultProtocol,
        serverIP: state.proxyTemp.serverIP,
        defaultServerIP: state.proxyTemp.defaultServerIP,
        serverPort: state.proxyTemp.serverPort,
        defaultServerPort: state.proxyTemp.defaultServerPort,
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		setContent: (content) => {
// 			dispatch(setContent(content))
// 		},
// 	}
// }

const ProxyContainer = connect(
    mapStateToProps,
    null
)(Proxy)

export default ProxyContainer
