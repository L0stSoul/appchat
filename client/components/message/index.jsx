import './style.css'

import React from 'react';

export default class Message extends React.Component {
    render() {
        return (
            <div className="message">
                {this.props.message.text}
            </div>
        )
    }
}
