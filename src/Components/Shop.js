import React from 'react';
import {useDispatch} from 'react-redux';
import { incrementByAmount, decrementByAmount } from '../State/counterSlice';

const Shop = () => {
  const dispatch = useDispatch();

  return (
    <div>
        <h2>Deposit/Withdraw Money</h2>
        <button className='btn btn-primary mx-2' onClick={()=> {dispatch(decrementByAmount(100))}}>-</button>
        Update Balance
        <button className='btn btn-primary mx-2' onClick={()=> {dispatch(incrementByAmount(100))}}>+</button>

    </div>
  )
}

export default Shop
