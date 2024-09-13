import { Outlet, useRouteLoaderData } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import RidesPage from "./rides";

export default function RidesLayout() {
  const { userData } = useOutletContext();
  return (
    <>
      <RidesPage />
      <Outlet context={{ userData }} />
    </>
  );
}
