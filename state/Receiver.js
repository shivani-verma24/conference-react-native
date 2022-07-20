import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../state/actions";
import { PRODUCTS_URL } from "../url/urls";

const Receiver = () =>{
    const result = useSelector(x=> x);    //receives data (store)
    // console.log(result)
    const dispatch =useDispatch();
    
    useEffect(()=>{
        dispatch(getData(PRODUCTS_URL));
    },[])

    return <div>
        <h1>Receiver</h1>
        <h1>Count: {result.count}</h1>
        <button onClick={()=>{
             dispatch(getData(PRODUCTS_URL));
        }}>
        </button>
    </div>
};

export default Receiver;