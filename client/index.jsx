import React from 'react';

import App from './components/app/index.jsx';

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
