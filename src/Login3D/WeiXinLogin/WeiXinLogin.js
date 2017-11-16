import React from "react"
// import PropTypes from "prop-types"

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
                width: 200,
                height: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: 200,
                left: 200,
                zIndex: 10,
            },
            qrcodeFrame: {
                width: 200,
                height: 200,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
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
