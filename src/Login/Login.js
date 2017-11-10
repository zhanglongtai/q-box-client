import React from "react"
// import PropTypes from "prop-types"

const { ipcRenderer } = window.require('electron')

class Login extends React.Component {
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

            event.sender.send()
        })
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
                width: 800,
                height: 400,
            },
        }

        return (
            <div
                className="login-container"
                style={styles.container}
                onKeyDown={this.toogleDevTools}
                tabIndex="0"
            >
                <WeiXinLogin
                    qrcodeURL={this.state.qrcodeURL}
                />
                <Poster
                    imgURL={this.state.imgURL}
                />
            </div>
        )
    }
}

export default Login
