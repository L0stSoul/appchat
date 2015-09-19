import React, {Component} from 'react';
import { connect } from 'react-redux';

import MessagesList from '../messagesList/index.jsx';
import MessagesComposer from '../messagesComposer/index.jsx';

import {addMessage} from '../../actions/index.js';

export default class App extends Component {
    sendMessage(value) {
        addMessage(value);
    }

    constructor(props) {
        super();
        this.state = props.e;
    }
    render() {
        return(
            <div>
                <MessagesList messages={this.props.messages} />
                <MessagesComposer onSendRequested={(value) => this.sendMessage(value)} />
            </div>
        )
    }
}

function mapper(state) {
    return state;
}

export default connect(mapper)(App);
