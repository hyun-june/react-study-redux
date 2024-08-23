import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import Box from './component/Box';

function App() {
  const count = useSelector(state=>state.count)
  let id = useSelector(state=>state.id)
  let password = useSelector(state=>state.password)
  const dispatch = useDispatch();

  const increase = () =>{
    dispatch({type:"INCREMENT",payload:{num:5}});
  }
  const login = () =>{
    dispatch({type:"LOGIN",payload:{id:"hyun",password:"123"}})
  }
  const decrement = () =>{
    dispatch({type:"DECREMENT",payload:{num:5}})
  }
  return (
    <div>
      <h1>{id},{password}</h1>
     <h1>{count}</h1>
     <button onClick={increase}>+</button>
     <button onClick={decrement}>-</button>
     <button onClick={login}>Login</button>
     <Box/>
    </div>
  );
}

export default App;
