import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement,reset,incrementByAmount} from './CounterSlice'
import { useState } from 'react';

const Counter = () => {
   const [incrementAmount,setIncrementValue] = useState(0);
   const addValue = Number(incrementAmount)||0;
   const resetAll = ()=>{
      setIncrementValue(0);
      dispatch(reset())
   }
    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();
  return (
     <section>
        <p>{count}</p>
        <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
        <input
         type="text"
         value={incrementAmount} 
         onChange={(e)=>setIncrementValue(e.target.value)}
        />
        <div>
         <button onClick={()=>dispatch(incrementByAmount(addValue))}>Add Amount</button>
         <button onClick={()=>resetAll()}>reset</button>
        </div>
     </section>
  )
}

export default Counter
