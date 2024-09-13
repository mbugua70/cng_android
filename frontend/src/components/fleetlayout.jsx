import { Outlet, useRouteLoaderData } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import FleetPage from "./fleet";

export default function FleetLayout() {
  const { userData } = useOutletContext();
  return (
    <>
      <FleetPage />
      <Outlet context={{ userData }} />
    </>
  );
}
