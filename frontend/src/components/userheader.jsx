import {Link, useLocation} from "react-router-dom"
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const UserHeader = () =>{

    const locaton = useLocation()
    const pathname = locaton.pathname
    console.log(pathname);
    return (
      <>
        <nav>
          <div className=" topmenu left_menu"></div>
          <div className=" topmenu centered_menu">
            {pathname === "/registration" ? "Registration" : ""}
            {pathname.includes("/park") ? "PARK MAPPING" : ""}
            {pathname === "/park/edit" ? "PARK MAPPING" : ""}
            {pathname.includes("/fleet") ? "FLEET OWNERS" : ""}
            {pathname === "/fleet/edit" ? "FLEET OWNERS" : ""}
            {pathname.includes("/rides") ? "TEST RIDES" : ""}
            {pathname === "/rides/edit" ? "TEST RIDES" : ""}
            {pathname.includes("/hotleads") ? "HOTLEADS REPORT" : ""}
            {pathname === "/hotleads/edit" ? "HOTLEADS REPORT" : ""}
            {pathname.includes("/summary") ? "Day Summary" : ""}
            {pathname === "/summary/EDIT" ? "DAY SUMMMARY" : ""}
          </div>
          <div className=" topmenu right_menu">
            <Link href="index.html">
              <i className="fa fa-home fa-2x"></i>
            </Link>
          </div>
        </nav>
      </>
    );
}

export default UserHeader;