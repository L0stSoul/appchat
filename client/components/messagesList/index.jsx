import './style.css'

import React from 'react';
import Message from '../message/index.jsx';

export default class MessagesList extends React.Component {
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
