import React, { useEffect, useState } from "react";
import team from './team.json';
const TeamItem = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {

    setUsers(team.team);
  }, []);
  return (
    <>
    
      <center style={{ minHeight: "60vh" }}>
        <p className="mt-3 fw-bold">Our Team</p>
        <center>
          <div className="w-full d-flex flex-wrap mt-2 justify-content-center">

            {
              users && users.map((t) => (<div className="w-40 mt-2 px-1">
              <div className="card w-11/12 py-2">
                <div>
                    <img src={t.url} className="rounded-full w-20 h-20" alt="yty" />
                </div>
                  <p className="text-xs mt-2">{t.name}</p>
                  <p className="text-xs text-blue-600">{t.p}</p>
              </div>
            </div>
              ))
            }


          </div>
        </center>
      </center>
    </>
  );
};

export default TeamItem;
