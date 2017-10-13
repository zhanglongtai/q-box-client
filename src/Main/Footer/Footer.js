import React from 'react'
import PropTypes from 'prop-types'

const { ipcRenderer, shell } = window.require('electron')

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: '', // 'sync', 'action'
        }
    }

    render() {
        const styles = {
            container: {
                width: 400,
                height: 50,
                borderTop: '1px solid #d1d5da',
                display: 'flex',
                justifyContent: 'space-between',
            },
            syncContainer: {
                height: 50,
                margin: '0 10px 0 0',
                display: 'flex',
                alignItems: 'center',
            },
            syncContainerHover: {
                height: 50,
                margin: '0 10px 0 0',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#f6f8fa',
                cursor: 'pointer',
            },
            syncIcon: {
                height: 50,
                width: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            syncText: {
                margin: '0 10px 0 0',
                height: 50,
                lineHeight: '50px',
            },
            actionContainer: {
                margin: '0 0 0 20px',
                height: 50,
                display: 'flex',
                alignItems: 'center',
            },
            actionContainerHover: {
                margin: '0 0 0 20px',
                height: 50,
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#f6f8fa',
                cursor: 'pointer',
            },
            actionIcon: {
                height: 50,
                width: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            actionText: {
                margin: '0 10px 0 0',
                height: 50,
                lineHeight: '50px',
            },
        }

        let sync = null
        if (this.props.sync) {
            if (this.state.hover === 'sync') {
                sync = (
                    <div
                        className="footer-sync-container"
                        style={styles.syncContainerHover}
                        onMouseLeave={() => {this.setState({hover: ''})}}
                        onClick={() => {this.props.setSync(!this.props.sync)}}
                    >
                        <div
                            className="footer-sync-icon"
                            style={styles.syncIcon}
                        >
                            <i
                                className="material-icons"
                                style={{
                                    fontSize: 24,
                                }}
                            >pause</i>
                        </div>
                        <p
                            className="footer-sync-text"
                            style={styles.syncText}
                        >暂停同步</p>
                    </div>
                )
            } else {
                sync = (
                    <div
                        className="footer-sync-container"
                        style={styles.syncContainer}
                        onMouseEnter={() => {this.setState({hover: 'sync'})}}
                    >
                        <div
                            className="footer-sync-icon"
                            style={styles.syncIcon}
                        >
                            <i
                                className="material-icons"
                                style={{
                                    fontSize: 24,
                                }}
                            >check</i>
                        </div>
                        <p
                            className="footer-sync-text"
                            style={styles.syncText}
                        >最新</p>
                    </div>
                )
            }
        } else {
            if (this.state.hover === 'sync') {
                sync = (
                    <div
                        className="footer-sync-container"
                        style={styles.syncContainerHover}
                        onMouseLeave={() => {this.setState({hover: ''})}}
                        onClick={() => {this.props.setSync(!this.props.sync)}}
                    >
                        <div
                            className="footer-sync-icon"
                            style={styles.syncIcon}
                        >
                            <i
                                className="material-icons"
                                style={{
                                    fontSize: 24,
                                }}
                            >cached</i>
                        </div>
                        <p
                            className="footer-sync-text"
                            style={styles.syncText}
                        >继续同步</p>
                    </div>
                )
            } else {
                sync = (
                    <div
                        className="footer-sync-container"
                        style={styles.syncContainer}
                        onMouseEnter={() => {this.setState({hover: 'sync'})}}
                    >
                        <div
                            className="footer-sync-icon"
                            style={styles.syncIcon}
                        >
                            <i
                                className="material-icons"
                                style={{
                                    fontSize: 24,
                                }}
                            >pause</i>
                        </div>
                        <p
                            className="footer-sync-text"
                            style={styles.syncText}
                        >同步已暂停</p>
                    </div>
                )
            }
        }

        const action = (
            <div
                className="footer-action-container"
                style={this.state.hover === 'action' ? styles.actionContainerHover : styles.actionContainer}
                onClick={() => {shell.openExternal(this.props.website)}}
                onMouseEnter={() => {this.setState({hover: 'action'})}}
                onMouseLeave={() => {this.setState({hover: ''})}}
            >
                <div
                    className="footer-action-icon"
                    style={styles.actionIcon}
                >
                    <i
                        className="material-icons"
                        style={{
                            fontSize: 24,
                        }}
                    >stars</i>
                </div>
                <p
                    className="footer-action-text"
                    style={styles.actionText}
                >升级</p>
            </div>
        )

        return (
            <div
                className="footer-container"
                style={styles.container}
            >
                {sync}
                {action}
            </div>
        )
    }
}

Footer.propTypes = {
    website: PropTypes.string.isRequired,
    sync: PropTypes.bool.isRequired,
    setSync: PropTypes.func.isRequired,
}

export default Footer
