import React from "react"
// import PropTypes from "prop-types"

import Win32 from "./Win32";

const { ipcRenderer } = window.require('electron')

class FolderPanel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            folder: '',
            list: [],
        }
    }

    componentDidMount() {
        ipcRenderer.send('folder-panel-ready')
        ipcRenderer.on('folder-list', (event, list) => {
            this.setState({
                folder: list[0].name,
                list: list,
            }, () => {
                ipcRenderer.send('folder-panel-show')
            })
        })
    }

    recordFolder(folder) {
        this.setState({
            folder: folder,
        })
    }

    submitFolder() {
        ipcRenderer.send('folder-confirm', {
            folder: this.state.folder,
        })
    }

    render() {
        const styles = {
            container: {
                width: 400,
                height: 400,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        }

        return (
            <div
                className="login-container"
                style={styles.container}
                onKeyDown={this.toogleDevTools}
                tabIndex="0"
            >
                <Win32
                    list={this.state.list}
                    recordFolder={this.recordFolder}
                />
            </div>
        )
    }
}

// FolderPanel.propTypes = {
// }

export default FolderPanel
