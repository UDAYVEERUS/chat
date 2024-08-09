const initialState = {
    messages: [],
    notification: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_MESSAGES':
            return {
                ...state,
                messages: payload,
            };
        case 'NEW_MESSAGE':
            return {
                ...state,
                messages: [payload, ...state.messages],
                notification: payload,
            };
        case 'CLEAR_NOTIFICATION':
            return {
                ...state,
                notification: null,
            };
        default:
            return state;
    }
}
