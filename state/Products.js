const initialState = {
    status: '',
    data: []
}

export const Products = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHING':
            console.log('Fetching..')

            return { ...state, status: 'loading' }
        case 'FETCHING_SUCCESS':
            console.log('Fetching success')
            return { ...state, status: 'success', data: action.data }
        case 'FETCHING_FAILURE':
            console.log('Fetching failed')
            
            return { ...state, status: 'failure', date: [] }

        default:
            return { ...state }
    }

};

