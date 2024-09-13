/* eslint-disable react-refresh/only-export-components */
// import {Suspense} from 'react'
// import { getUserData } from "./api";
import UserDetails from "./userdetails";
// import {useLoaderData, Await, defer} from 'react-router-dom'
// import { requireAuth } from "./utilis";
import { useOutletContext } from "react-router-dom";
import RidesForm from "./ridesform";

// export async function loader ({request}) {
//     await requireAuth(request)
//     return defer({userData: getUserData()});
// }

const RidesPage = () => {
  // const userDataPromise = useLoaderData();
  // console.log(userDataPromise);

  const { userData } = useOutletContext();

  return (
    <>
      <div className="container">
        <UserDetails userData={userData} />

        <RidesForm />
      </div>
    </>
  );
};

export default RidesPage;
