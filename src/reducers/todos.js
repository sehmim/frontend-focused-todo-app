const initialState = {
    input: "",
    details: "",
    list: [
        {
            showDetails: false,
            edit: false
        }
    ]
}

export const showItem = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_ITEM':
            return{
                ...state,
                list : !this.state.list[action.id].showDetails,
            }
        default:
            return state
    }
}

// export const todos = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SHOW_ITEM':
//             return {
//                 ...state,
//                 list: !this.state.list[action.id].showDetails,
//             }
//         default:
//             return state
//     }
// }