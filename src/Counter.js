import React from 'react'

export const Counter = () => {
   const handleAdd= ()=>{
   
   } 
   const handleReduce= ()=>{
   
   } 
    return (
    <>
    <h1>Counter:{}</h1>
     <button onClick={()=>handleAdd}>Add</button>
     <button onClick={()=>handleReduce}>Reduce</button>
    </>
  )
}
