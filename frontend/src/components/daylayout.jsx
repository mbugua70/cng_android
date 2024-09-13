import { Outlet, useRouteLoaderData } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import DayPage from "./daysummary";

export default function DayLayout() {
  const { userData } = useOutletContext();
  return (
    <>
      <DayPage />
      <Outlet context={{ userData }} />
    </>
  );
}
