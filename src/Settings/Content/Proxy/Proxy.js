import React from "react"
import PropTypes from "prop-types"
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown"
import CheckCircle from "../../CheckCircle"

class Proxy extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styles = {
            container: {
                width: 400,
                height: 350,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            optionContainer1: {
                width: 350,
                height: 100,
                display: 'flex',
                alignItems: 'center',
            },
            title: {
                width: 150,
                height: 100,
                display: 'flex',
                justifyContent: 'flex-end',
            },
            group: {
                width: 200,
                height: 100,
                display: 'flex',
                flexDirection: 'column',
            },
            optionContainer2: {
                width: 350,
                height: 250,
                display: 'flex',
                alignItems: 'center',
            },
            title2: {
                width: 150,
                height: 30,
                display: 'flex',
                justifyContent: 'flex-end',
                color: this.props.option === 'manual' ? 'black' : '#6a737d',
            },
            group2: {
                width: 200,
                height: 30,
            },
        }

        return (
            <div
                className="proxy-container"
                style={styles.container}
            >
                <div
                    className="proxy-option-container"
                    style={styles.optionContainer1}
                >
                    <div
                        className="proxy-options-title"
                        style={styles.title}
                    >代理服务器设置: </div>
                    <div
                        className="proxy-option-group"
                        style={styles.group}
                    >
                        <CheckCircle
                            text="无代理服务器"
                            selected={this.props.option === 'none'}
                            onToggle={this.props.setOption.bind(null, 'none')}
                        />
                        <CheckCircle
                            text="自动检测"
                            selected={this.props.option === 'auto'}
                            onToggle={this.props.setOption.bind(null, 'auto')}
                        />
                        <CheckCircle
                            text="手动"
                            selected={this.props.option === 'manual'}
                            onToggle={this.props.setOption.bind(null, 'manual')}
                        />
                    </div>
                </div>
                <div
                    className="proxy-option-container"
                    style={styles.optionContainer2}
                >
                    <div
                        className="proxy-options-title"
                        style={styles.title}
                    >代理服务器类型: </div>
                    <div
                        className="proxy-option-group"
                        style={styles.group2}
                    >
                        <Dropdown
                            selectedKey={this.props.protocol}
                            options={[
                                { key: 'HTTP', text: 'HTTP' },
                                { key: 'SOCKS4', text: 'SOCKS4' },
                                { key: 'SOCKS5', text: 'SOCKS5' },
                            ]}
                            onChanged={this.props.set}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

Proxy.propTypes = {
    option: PropTypes.string.isRequired,
    optionDefault: PropTypes.string.isRequired,
    protocol: PropTypes.string.isRequired,
    protocolDefault: PropTypes.string.isRequired,
    serverIP: PropTypes.string.isRequired,
    serverIPDefault: PropTypes.string.isRequired,
    serverPort: PropTypes.string.isRequired,
    serverPortDefault: PropTypes.string.isRequired,
    setOption: PropTypes.func.isRequired,
    setProtocol: PropTypes.func.isRequired,
}

export default Proxy
