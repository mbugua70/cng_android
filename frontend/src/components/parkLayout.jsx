import { Outlet, useRouteLoaderData } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ParkPage from "./park";

export default function ParkLayout() {
  const { userData } = useOutletContext();
  return (
    <>
      <ParkPage />
      <Outlet context={{ userData }} />
    </>
  );
}
