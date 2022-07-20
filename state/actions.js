//2. step- returns object
import axios from "axios"
export const increment = () => {
    return {
        type: 'INCREMENT',
    }
}


export const decrement = () => {
    return {
        type: 'DECREMENT',
    }
}



const fetchDataInit = () => {
    return {
        type: 'FETCHING'
    }
}
const fetchDataFailure = () => {
    return {
        type: 'FETCHING_FAILURE'
    }
}
const fetchDataSuccess = (data) => {
    return {
        type: 'FETCHING_SUCCESS',
        data
    }
}

//returning a callback function of assynchronous type
export const getData = (url) => {
    return async (dispatchAction) => {
        dispatchAction(fetchDataInit());
        try {
            let result = await axios.get(url);
            dispatchAction(fetchDataSuccess(result.data))
        }
        catch (ex) {
            // console.log(ex)
            dispatchAction(fetchDataFailure())
        }
    }
}




