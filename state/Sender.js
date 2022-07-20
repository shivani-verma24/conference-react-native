import { useDispatch } from "react-redux";
import { increment, decrement } from "../state/actions";

const Sender = () =>{
    const dispatch = useDispatch();     //calls actions  (sends data)
    // 1. buttons (components)  calling actions
    return <div>
        <button onClick={e => {
            dispatch(increment());
        }}>Increment</button>

        <button onClick={e => {
             dispatch(decrement())
        }}>Decrement</button>
    </div>
    
};

export default Sender;