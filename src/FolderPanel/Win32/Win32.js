import React from "react"
import PropTypes from "prop-types"

import CheckCircle from "../../UILib/CheckCircle";

const { ipcRenderer } = window.require('electron')

class Win32 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: 0,
        }

        this.changeFolder = this.changeFolder.bind(this)
    }

    changeFolder(index) {
        this.setState({
            selected: index,
        })
    }

    render() {
        const styles = {
            container: {
                width: 300,
                height: 350,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            },
        }
 
        return (
            <div
                className="win32-folder-container"
                style={styles.container}
            >
                {this.props.folderList.map((item, index) => {
                    return (
                        <CheckCircle
                            key={index}
                            selected={this.state.selected === index}
                            text={item.name}
                            onToggle={() => {
                                this.changeFolder(index)
                                this.props.recordFolder(item.name)
                            }}
                            style={{
                                margin: '5px 10px 5px 10px',
                            }}
                        />
                    )
                })}
            </div>
        )
    }
}

Win32.propTypes = {
    list: PropTypes.array.isRequired,
    recordFolder: PropTypes.func.isRequired,
}

export default Win32
