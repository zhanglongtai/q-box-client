import React from 'react'
import PropTypes from 'prop-types'
import HeaderTabItem from "./HeaderTabItem";
import { log } from '../../utils'

class HeaderTabs extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const styles = {
            container: {
                width: 350,
                height: 99,
                margin: '0 25px 0 25px',
                borderBottom: '1px solid #d1d5da',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-around',
            },
        }

        return (
            <div
                className="header-container"
                style={styles.container}
            >
                {this.props.contentList.map((item, index) => {
                    return (
                        <HeaderTabItem
                            key={index}
                            name={item.name}
                            title={item.title}
                            imgURL={item.imgURL}
                            setContent={this.props.setContent}
                            selected={this.props.content === item.name}
                        />
                    )
                })}
            </div>
        )
    }
}

HeaderTabs.propTypes = {
    content: PropTypes.string.isRequired,
    contentList: PropTypes.array.isRequired,
    setContent: PropTypes.func.isRequired,
}

export default HeaderTabs
