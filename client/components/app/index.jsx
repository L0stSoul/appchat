import React, {Component} from 'react';

import MessagesList from '../messagesList/index.jsx';
import MessagesComposer from '../messagesComposer/index.jsx';

export default class App extends Component {
    sendMessage(value) {
        this.setState({ messages: this.state.messages.concat({ text: value }) })
    }

    constructor(props) {
        super();
        this.state = props.e;
    }
    render() {
        return(
            <div>
                <MessagesList messages={this.state.messages} />
                <MessagesComposer onSendRequested={(value) => this.sendMessage(value)} />
            </div>
        )
    }
}
