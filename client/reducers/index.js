const initialState = {
    messages: [
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
