import React from 'react'
import PropTypes from 'prop-types'

const { ipcRenderer, shell } = window.require('electron')

class Footer extends React.Component {
    constructor(props) {
        super(props)
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
                margin: '0 20px 0 20px',
                display: 'flex',
                alignItems: 'center',
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
                margin: '0 20px 0 20px',
                height: 50,
                display: 'flex',
                alignItems: 'center',
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

        const sync = (
            <div
                className="footer-sync-container"
                style={styles.syncContainer}
            >
                <div
                    className="footer-sync-icon"
                    style={styles.syncIcon}
                >
                    <i
                        className="material-icons .md-42"
                    >check</i>
                </div>
                <p
                    className="footer-sync-text"
                    style={styles.syncText}
                >最新</p>
            </div>
        )

        const action = (
            <div
                className="footer-action-container"
                style={styles.actionContainer}
                onClick={() => {shell.openExternal('www.baidu.com')}}
            >
                <div
                    className="footer-action-icon"
                    style={styles.actionIcon}
                >
                    <i
                        className="material-icons .md-42"
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

export default Footer
