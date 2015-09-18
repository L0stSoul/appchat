import './style.css'

import React, {Component, PropTypes}  from 'react';
import Message from '../message/index.jsx';

export default class MessagesList extends Component {
    render() {
        return (
            <div className="message-list">
               {this.props.messages.map((message) =>
                    <Message message={message}/>
               )}
            </div>
        )
    }
}

MessagesList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            message: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}
