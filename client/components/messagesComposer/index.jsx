import './style.css'

import React from 'react';

export default class MessageComposer extends React.Component {
    onButtonClick() {
        var value = this.refs.textarea.getDOMNode().value;
        this.props.sendMessage(value);
    }

    render() {
        return (
            <div className="messages-composer">
                <textarea className="messages-composer__box" ref="textarea"/>
                <button onClick={this.onButtonClick.bind(this)} className="messages-composer__button">Send!</button>
            </div>
        )
    }
}
