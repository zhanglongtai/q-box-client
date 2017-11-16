import React from "react"
// import PropTypes from "prop-types"

import WeiXinLogin from "./WeiXinLogin"
import Poster3D from "./Poster3D"

const { ipcRenderer } = window.require('electron')

class Login3D extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            imgURL: '',
            qrcodeURL: '',
        }
    }

    componentDidMount() {
        ipcRenderer.send('login-ready')
        ipcRenderer.on('login-url', (event, urls) => {
            this.setState({
                imgURL: urls.imgURL,
                qrcodeURL: urls.qrcodeURL,
            });

            event.sender.send('login-ready-show')
        })

        this.timer = setTimeout(() => {
            this.finishLogin()
        }, 5000)
    }

    verifyLogin() {
        return {
            success: true,
            username: 'test',
            session: 'abcd',
        }
    }

    finishLogin() {
        const result = this.verifyLogin()
        if (result.success) {
            ipcRenderer.send('login-finish', {
                username: result.username,
                session: result.session,
            })
        }
    }

    toogleDevTools(event) {
        if (event.keyCode === 123) {
            ipcRenderer.send('toogle-devtools')
        }
    }

    render() {
        const styles = {
            container: {
                width: 600,
                height: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
            },
        }

        return (
            <div
                className="login-container"
                style={styles.container}
                onKeyDown={this.toogleDevTools}
                tabIndex="0"
            >
                <Poster3D
                    imgURL={this.state.imgURL}
                />
                <WeiXinLogin
                    qrcodeURL={this.state.qrcodeURL}
                />
                
            </div>
        )
    }
}

export default Login3D
