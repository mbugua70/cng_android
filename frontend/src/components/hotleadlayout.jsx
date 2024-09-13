import { Outlet, useRouteLoaderData } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import HotleadPage from "./hotlead";

export default function HotleadLayout() {
  const { userData } = useOutletContext();
  return (
    <>
      <HotleadPage />
      <Outlet context={{ userData }} />
    </>
  );
}
