import React from "react";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import './Search.css'

function NftSearch() {
  return (
    <section>
      <div className="container">
        <div className="search-bar-box">
          <div>
            <HiOutlineBars3BottomLeft/>
          </div>
          <div>
            <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default NftSearch;
