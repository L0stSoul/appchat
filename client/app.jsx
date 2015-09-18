import React {Component} from 'react';

import MessagesList from './components/messagesList/index.jsx';
import MessagesComposer from './components/messagesComposer/index.jsx';

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

const sampleState = {
    messages: [
        {
            senderId: 1,
            channelId: 1,
            text: 'Hello world!',
        },
        {
            senderId: 1,
            channelId: 1,
            text: 'Hello world! 2',
        },
        {
            senderId: 1,
            channelId: 1,
            text: 'Hello world! 2',
        }
    ]
}
React.render(<App e={sampleState}/>, document.getElementById('app'))
