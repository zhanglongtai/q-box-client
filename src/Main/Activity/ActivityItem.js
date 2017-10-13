import React from 'react'
import PropTypes from 'prop-types'

const { ipcRenderer, clipboard, shell } = window.require('electron')

class ActivityItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            containerHover: false,
            btnHover: false,
        }

        this.copyURL = this.copyURL.bind(this)
    }

    copyURL(event) {
        event.stopPropagation()
        clipboard.writeText(this.props.fileURL)
    }

    render() {
        const styles = {
            container: {
                maxWidth: 400,
                width: '100%',
                minHeight: 60,
                display: 'flex',
                position: 'relative',
            },
            containerHover: {
                maxWidth: 400,
                width: '100%',
                minHeight: 60,
                display: 'flex',
                position: 'relative',
                backgroundColor: '#bbc0c5',
            },
            iconContainer: {
                height: 60,
                width: 60,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            infoContainer: {
                height: 60,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'default',
                userSelect: 'none',
            },
            fileName: {
                height: 30,
                maxWidth: 300,
                lineHeight: '35px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                cursor: 'default',
                userSelect: 'none',
            },
            actionTime: {
                height: 30,
                lineHeight: '25px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                cursor: 'default',
                userSelect: 'none',
            },
            copyBtn: {
                display: this.state.containerHover ? '' : 'none',
                position: 'absolute',
                top: 20,
                right: 10,
                height: 20,
                width: 60,
                fontSize: 12,
                textAlign: 'center',
                lineHeight: '20px',
                color: '#2196F3',
                cursor: 'pointer',
            },
            copyBtnHover: {
                position: 'absolute',
                top: 20,
                right: 10,
                height: 20,
                width: 60,
                color: '#2196F3',
                fontSize: 12,
                textAlign: 'center',
                lineHeight: '20px',
                backgroundColor: '#64B5F6',
                cursor: 'pointer',
            },
        }

        return (
            <div
                className="activity-item-container"
                style={this.state.containerHover ? styles.containerHover : styles.container}
                onMouseEnter={() => {this.setState({containerHover: true})}}
                onMouseLeave={() => {this.setState({containerHover: false})}}
                onClick={() => {shell.showItemInFolder(this.props.filePath)}}
            >
                <div
                    className="activity-item-icon-container"
                    style={styles.iconContainer}
                >
                    <i className="material-icons .md-42">insert_drive_file</i>
                </div>
                <div
                    className="activity-item-info-container"
                    style={styles.infoContainer}
                >
                    <div
                        className="activity-item-file-name"
                        style={styles.fileName}
                    >
                        {this.props.fileName}
                    </div>
                    <div
                        className="activity-item-action-time"
                        style={styles.actionTime}
                    >
                        {`${this.props.actor} 在 ${this.props.actionTime} 前${this.props.action}`}
                    </div>
                    <div
                        className="activity-item-copy-btn"
                        style={this.state.btnHover ? styles.copyBtnHover : styles.copyBtn}
                        onMouseEnter={() => {this.setState({btnHover: true})}}
                        onMouseLeave={() => {this.setState({btnHover: false})}}
                        onClick={this.copyURL}
                    >
                        复制链接
                    </div>
                </div>
            </div>
        )
    }
}

ActivityItem.propTypes = {
    fileName: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    actionTime: PropTypes.string.isRequired,
    fileURL: PropTypes.string.isRequired,
    filePath: PropTypes.string.isRequired,
}

export default ActivityItem
