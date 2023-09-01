
import './App.css';
import PostList from "./post/PostList";
import AddPost from './screen/AddPost';
// import { decreament, increament, increase, reset } from '../store/counter-slice';
// import { useState } from "react";

function App() {
  // const [amount, setAmount] = useState("");
  // const count = useSelector(state => state.counter.count);


  // const addAmount = Number(amount) || 0;

  // const amountChangeHandler = (event) => {
  //   setAmount(event.target.value)
  // }

  // const increamentHandler = () => {
  //   dispatch(increament())
  // }

  // const decreamentHandler = () => {
  //   dispatch(decreament())
  // }

  // const increaseHandler = () => {
  //   dispatch(increase(addAmount))
  //   setAmount("")
  // }

  // const resetHandler = () => {
  //   dispatch(reset())
  //   setAmount("")
  // }

  return ( 
    <div className='container'>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <p>count is {count}</p>
        <input type="text" name="amount" id="amount" onChange={amountChangeHandler} value={amount} /><br />
        <button onClick={increamentHandler}>Increament</button>
        <button onClick={decreamentHandler}>Decreament</button>
        <button onClick={increaseHandler}>Add amount</button>
        <button onClick={resetHandler}>Reset</button>
      </div> */}

      <AddPost />
      <PostList />
      
      
    </div>
  )
}

export default App
