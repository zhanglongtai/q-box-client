import React from "react"
import PropTypes from "prop-types"

class Inform extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchInform()
    }

    render() {
        const styles = {
            container: {
                display: this.props.content === 'inform' ? 'flex' : 'none',
                width: 400,
                height: 498,
                alignItems: 'center',
                justifyContent: 'center',
            },
            listContainer: {
                width: 400,
                height: 498,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                overflowY: 'auto',
                overflowX: 'hidden',
            },
            msgContainer: {
                width: 400,
                height: 498,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            },
            iconContainer: {
                width: 120,
                height: 120,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
        }

        let content = null
        if (this.props.isFetching) {
            content = (
                <div
                    className="inform-msg"
                    style={styles.msgContainer}
                >
                    <div
                        className="inform-msg-icon-container"
                        style={styles.iconContainer}
                    >
                        <i
                            className="material-icons"
                            style={{
                                opacity: 0.6,
                                fontSize: 100,
                            }}
                        >hourglass_full</i>
                    </div>
                    <p>正在获取数据</p>
                </div>
            )
        } else {
            if (this.props.receiveSuccess) {
                if (this.props.informList.length === 0) {
                    content = (
                        <div
                            className="inform-msg"
                            style={styles.msgContainer}
                        >
                            <div
                                className="inform-msg-icon-container"
                                style={styles.iconContainer}
                            >
                                <i
                                    className="material-icons"
                                    style={{
                                        opacity: 0.6,
                                        fontSize: 100,
                                    }}
                                >notifications_none</i>
                            </div>
                            <p>暂无动态</p>
                        </div>
                    )
                } else {
                    content = (
                        <div
                            className="inform-file-list"
                            style={styles.listContainer}
                        >
                            {
                                this.props.informList.map((item, index) => {
                                    return (
                                        <div key={index}>{item.name}</div>
                                    )
                                })
                            }
                        </div>
                    )
                }
            } else {
                content = (
                    <div
                        className="inform-msg"
                        style={styles.msgContainer}
                    >
                        <div
                            className="inform-msg-icon-container"
                            style={styles.iconContainer}
                        >
                            <i
                                className="material-icons"
                                style={{
                                    opacity: 0.6,
                                    fontSize: 100,
                                }}
                            >info_outline</i>
                        </div>
                        <p>获取失败</p>
                    </div>
                )
            }
        }

        return (
            <div
                className="inform-container"
                style={styles.container}
            >
                {content}
            </div>
        )
    }
}

Inform.propTypes = {
    content: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    receiveSuccess: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string.isRequired,
    informList: PropTypes.array.isRequired,
    fetchInform: PropTypes.func.isRequired,
}

export default Inform
