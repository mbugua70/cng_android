import { NavLink } from "react-router-dom";
import HomeNavBar from "./homenavbar";

import "react-toastify/dist/ReactToastify.css";

const IndexPageTwo = () => {
  return (
    <>
      {/* index content */}
      <div className="main_body">
        <div
          className="row"
          id="p_to center_it"
          style={{ textAlign: "center" }}
        >
          <div className="col s12 m12">
            <p>
              <NavLink
                to="dealer"
                className="waves-effect block waves-light pink  btn-large w80"
              >
                Dealer Report
              </NavLink>
            </p>
          </div>
          <div className="col s12 m12">
            <p>
              <NavLink
                to="fleet"
                className="waves-effect block waves-light green  btn-large w80"
                style={{ textAlign: "center" }}
              >
                CAMPAIGN FLEET OWNER REPORT
              </NavLink>
            </p>
          </div>

          <div className="col s12 m12">
            {" "}
            <p>
              <NavLink
                to="rider"
                className="waves-effect block waves-light blue  btn-large w80"
              >
                CAMPAIGN RIDER REPORT
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPageTwo;
