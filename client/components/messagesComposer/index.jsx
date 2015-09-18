import './style.css'

import React, {Component, PropTypes} from 'react';

export default class MessageComposer extends Component {
    onButtonClick() {
        var value = this.refs.textarea.getDOMNode().value;
        this.props.onSendRequested(value);
    }

    render() {
        return (
            <div className="messages-composer">
                <textarea className="messages-composer__box" ref="textarea"/>
                <button onClick={() => this.onButtonClick()} className="messages-composer__button">Send!</button>
            </div>
        )
    }
}

MessageComposer.propTypes = {
    onSendRequested: PropTypes.func.isRequired
}
