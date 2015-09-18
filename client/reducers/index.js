const initialState = {
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

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'add_message':
            return {
                messages: [
                    ...state.messages,
                    {
                        text: action.text
                    }
                ]
            }
        default:
            return state;
    }
}
