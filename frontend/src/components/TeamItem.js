import React from "react";
// import imf from "./WIN_20210905_21_30_20_Pro.jpg";

const TeamItem = () => {
  return (
    <>
    
      <center style={{minHeight:"65vh"}}>
        <p>Our Team</p>
        <div className="w-full my-2 md:w-40 px-2 py-2">
          <div className="card w-11/12 py-2">
            <div>
              <img src="https://res.cloudinary.com/dgynlpjsf/image/upload/v1689273538/products/tgjvxihim1ff2imjhzzd.jpg" className="rounded-full w-20 h-20" alt="yty" />
            </div>
            <p className="text-xs mt-2">Om Patel</p>
            <p className="text-xs text-blue-600">Developer Team</p>
          </div>
        </div>
        <div className="w-full my-2 md:w-40 px-2 py-2">
          <div className="card w-11/12 py-2">
            <div>
              <img src="https://res.cloudinary.com/dgynlpjsf/image/upload/v1689273538/products/tgjvxihim1ff2imjhzzd.jpg" className="rounded-full w-20 h-20" alt="yty" />
            </div>
            <p className="text-xs mt-2">Darshan Patel</p>
            <p className="text-xs text-blue-600">Developer Team</p>
          </div>
        </div>
      </center>
    </>
  );
};

export default TeamItem;
