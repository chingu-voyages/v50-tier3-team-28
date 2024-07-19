import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
import { Button } from "../../components/UI/Button";

export const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        // <div className='flex flex-col items-center'>
        //     <button
        //         aria-label="Increment value"
        //         onClick={() => dispatch(increment())}
        //     >
        //         Increment
        //     </button>
        //     <p>{count}</p>
        //     <button
        //         aria-label="Decrement value"
        //         onClick={() => dispatch(decrement())}
        //     >
        //         Decrement
        //     </button>
        // </div>
        <div className="flex flex-col items-center gap-4">
            <Button className="font-normal text-white bg-green-500 rounded-lg p-2 -mt-4" type="button" text="Increment" onClick={() => dispatch(increment())} />
            <p className="font-normal p-2 -mt-4">{count}</p>
            <Button className="font-normal text-white bg-green-500 rounded-lg p-2 -mt-4" type="button" text="Decrement" onClick={() => dispatch(decrement())} />
        </div>
    )
}
