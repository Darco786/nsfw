import React from "react";
import User_Img from'../../assets/user.png'

function NftUserProfile() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
                <div className="profile-box">
                    
                
              <div >
                <img src={User_Img} alt="" className="profile-img" />
              </div>
              <div className="d-flex">
                <h2>User_name</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Risus ut id velit
                hendrerit nunc tristique non malesuada malesuada. Eu lacus sed
                imperdiet elementum ipsum duis at ridiculus rhoncus.{" "}
              </p>
              </div>
            </div>

            <div className="col-md-6"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NftUserProfile;
