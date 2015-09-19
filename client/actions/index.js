const ADD_MESSAGE = 'add_message';

const localIo = io();

export function addMessage(text) {
    localIo.emit(ADD_MESSAGE, { text: text })
};

export function listenToSocket(store) {
    localIo.on(ADD_MESSAGE, function(args) {
        store.dispatch({ type: ADD_MESSAGE, ...args });
    })
};
