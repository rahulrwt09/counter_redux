import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAction, reduceAction } from './Component/action';

export const Counter = () => {
   const counter = useSelector((store)=>store.counter);
   const dispatch= useDispatch();
   const handleAdd= ()=>{
       dispatch(addAction(1))
   } 
   const handleReduce= ()=>{
       dispatch(reduceAction(1))
   } 
    return (
    <>
    <h1>Counter:{counter}</h1>
     <button onClick={()=>handleAdd()}>Add</button>
     <button onClick={()=>handleReduce()}>Reduce</button>
    </>
  )
}
