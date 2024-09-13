import { NavLink } from "react-router-dom";
import HomeNavBar from "./homenavbar";


import "react-toastify/dist/ReactToastify.css";




const IndexPage = () => {
  return (
    <>
      {/* navbar below */}
      <HomeNavBar />
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
                to="summary"
                className="waves-effect block waves-light black btn-large w80"
              >
                Day Summary
              </NavLink>
            </p>
          </div>
          <div className="col s12 m12">
            <p>
              <NavLink
                to="rides"
                className="waves-effect block waves-light orange  btn-large w80"
                style={{ textAlign: "center" }}
              >
                Test Rides
              </NavLink>
            </p>
          </div>

          <div className="col s12 m12">
            {" "}
            <p>
              <NavLink
                to="fleet"
                className="waves-effect waves-light purple  btn-large w80"
              >
                FLEET OWNERS
              </NavLink>
            </p>
          </div>

          <div className="col s12 m12">
            {" "}
            <p>
              <NavLink
                to="park"
                className="waves-effect waves-light  lime accent-4  btn-large w80"
              >
                PARK MAPPING
              </NavLink>
            </p>
          </div>

          <div className="col s12 m12">
            {" "}
            <p>
              <NavLink
                to="hotleads"
                className="waves-effect waves-light teal darken-3  btn-large w80"
              >
                HOTLEADS
              </NavLink>
            </p>
          </div>

          <div className="col s12 m12">
            {" "}
            <p>
              <NavLink
                to="registration"
                className="waves-effect waves-light green  btn-large w80"
              >
                Registration
              </NavLink>
            </p>
          </div>
        </div>
      </div>
      {/* <Outlet /> */}
    </>
  );
};

export default IndexPage;
