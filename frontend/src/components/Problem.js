import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import problem from './problem.json';
const Problem = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {

    setUsers(problem.problems);
  }, []);
  return (
    <div className='container my-3' style={{ minHeight: "65vh" }}>
      {
        users && users.map((p, key) => (

          <div className="card mt-2" key={key}>
            <div className="card-header bg-slate-800 text-gray-300 h-6 text-xs pt-0.5">
              {p.sr}
            </div>
            <div className="card-body">
              <h5 className="card-title text-sm">{p.title}</h5>
              <details>
                <summary className='text-sm  text-gray-500'>View Description</summary>
                <p className="card-text text-sm text-gray-500">{p.description}</p>
              </details>

              <Link to={`/register/${p.sr}`} className="btn text-gray-300 bg-slate-800 rounded-fill h-6  my-3 pt-0.5 text-xs ">Register Here!</Link>
            </div>
          </div>))}
    </div>
  )
}

export default Problem
