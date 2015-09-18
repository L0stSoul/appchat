import './style.css'

import React, {Component, PropTypes} from 'react';

export default class Message extends Component {
    render() {
        return (
            <div className="message">
                {this.props.message.text}
            </div>
        )
    }
}

Message.propTypes = {
    message: PropTypes.shape({
        message: PropTypes.string.isRequired
    }).isRequired
}
