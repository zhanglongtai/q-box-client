import React from "react"
import PropTypes from "prop-types"
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown"
import CheckCircle from "../../CheckCircle"
import { log } from "../../../utils"

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
                display: 'flex',
                padding: '0 0 0 10px',
            },
        }

        let selector = null
        if (this.props.option === 'manual') {
            selector = (
                <div className="pt-select .pt-fill">
                    <select
                        value={this.props.protocol}
                        onChange={(event) => {
                            const s = event.target
                            for (let i = 0; i < s.length; i++) {
                                const option = s.options[i]
                                if (option.selected) {
                                    this.props.setProtocol(option.value)
                                }
                            }
                        }}
                    >
                        <option value="HTTP">HTTP</option>
                        <option value="SOCKS4">SOCKS4</option>
                        <option value="SOCKS5">SOCKS5</option>
                    </select>
                </div>
            )
        } else {
            selector = (
                <div className="pt-select .pt-fill">
                    <select value={this.props.protocolDefault} disabled>
                        <option value="HTTP">HTTP</option>
                        <option value="SOCKS4">SOCKS4</option>
                        <option value="SOCKS5">SOCKS5</option>
                    </select>
                </div>
            )
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
                        {selector}
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
