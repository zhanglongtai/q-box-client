import React from "react"
// import PropTypes from "prop-types"

const { ipcRenderer } = window.require('electron')

const randomString = function() {
    const tables = '1234567890'
    let random = ''
    for (let i = 0; i < 16; i++) {
        const index = Math.floor(Math.random() * 10)
        const s = tables[index]
        random += s
    }

    return random
}

class WeiXinLogin extends React.Component {
    constructor(props) {
        super(props)
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
            qrcodeFrame: {
                width: 400,
                height: 400,
            },
        }

        return (
            <div
                className="weixin-login-container"
                style={styles.container}
            >
                <iframe
                    src={this.props.qrcodeURL}
                    style={styles.qrcodeFrame}
                />
            </div>
        )
    }
}

export default WeiXinLogin
