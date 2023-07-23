import React from 'react'
import { Link } from 'react-router-dom'

const Problem = () => {
  return (
   <div className='container my-3' style={{minHeight:"65vh"}}>
   <div className="card">
  <div className="card-header bg-slate-800 text-gray-300 h-6 text-xs pt-0.5">
    Department
  </div>
  <div className="card-body">
    <h5 className="card-title text-sm">Statement Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, tenetur!</h5>
    <details>
        <summary className='text-sm  text-gray-500'>View Description</summary>
        <p className="card-text text-sm text-gray-500">Description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae nobis ipsam asperiores placeat tempore dignissimos explicabo sit libero impedit pariatur!</p>
    </details>
    
    <Link to="/register/p1" className="btn text-gray-300 bg-slate-800 rounded-fill h-6  my-3 pt-0.5 text-xs ">Register Here!</Link>
  </div>
</div>
   </div>
  )
}

export default Problem
 