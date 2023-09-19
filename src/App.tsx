import { decrement, increment, incrementByAmount } from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook';
function App() {

  const {count} = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="flex flex-row space-x-4">
        <button 
          onClick={() => dispatch(incrementByAmount(5))}
          className="bg-orange-400 p-4">Increment payload 5
        </button>
        <button 
          onClick={() => dispatch(increment())}
          className="bg-orange-400 p-4">Increment
        </button>
        <div>{count}</div>
        <button
          onClick={()=> dispatch(decrement())}
          className="bg-orange-400 p-4">Decrement
        </button>
      </div>
    </div>
  )
}

export default App
