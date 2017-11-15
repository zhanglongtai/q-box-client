import React from "react"
// import PropTypes from "prop-types"

import Win32 from "./Win32";
import { DefaultButton } from "office-ui-fabric-react";

const { ipcRenderer } = window.require('electron')

class FolderPanel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            folder: '',
            list: [],
        }

        this.recordFolder = this.recordFolder.bind(this)
        this.submitFolder = this.submitFolder.bind(this)
    }

    componentDidMount() {
        ipcRenderer.send('folder-panel-ready')
        ipcRenderer.on('folder-list', (event, list) => {
            this.setState({
                folder: list[0],
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
        ipcRenderer.send('folder-confirm', this.state.folder)
    }

    render() {
        const styles = {
            container: {
                width: 400,
                height: 400,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                outline: 'none',
            },
            btnContainer: {
                width: 400,
                height: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        }

        return (
            <div
                className="folder-panel-container"
                style={styles.container}
                onKeyDown={this.toogleDevTools}
                tabIndex="0"
            >
                <Win32
                    list={this.state.list}
                    recordFolder={this.recordFolder}
                />
                <div
                    className="folder-panel-btn"
                    style={styles.btnContainer}
                >
                    <DefaultButton
                        onClick={this.submitFolder}
                        text="确认"
                    />
                </div>
            </div>
        )
    }
}

// FolderPanel.propTypes = {
// }

export default FolderPanel
