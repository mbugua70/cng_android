import { Link, useLocation } from "react-router-dom";

const HomeNavBar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);
  return (
    <>
      <nav>
        <div className=" topmenu left_menu"></div>
        <div className=" topmenu centered_menu">
          {pathname === "/" ? "CNG" : "registration"}

        </div>
        <div className=" topmenu right_menu">
          <Link href="index.html">
            <i className="fa fa-home fa-2x"></i>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default HomeNavBar;
