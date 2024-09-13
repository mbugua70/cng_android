import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom"
// import Layout from "./layout"
import RegistrationPage from "./registration"
// import SurveyPage from "./survey"
import IndexPage from "./indexpage"
import Layout from "./layout"
import PageNotFound from "./404"
import SurveyLayout from "./surveylayout"
import {action as loadingAction} from "./registration"
// import { surveyLoader} from "./survey"
import { loginloader} from "./registration"
import { loader as survyLoader } from "./surveylayout";
import SurveyForm from "./surveyform";

import EditEvent from "./EditEvent";

// import { requireAuth } from "./utilis"
import { requireAuth } from "./utilis";
// import FormLayout from "./FormLayout";
// import DaySummaryLayout from "./daylayout";
import RidesLayout from "./rideslayout";

import FleetLayout from "./fleetlayout";
import DayLayout from "./daylayout"

import ParkLayout from "./parkLayout"
import HotleadLayout from "./hotleadlayout"
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<IndexPage />} />
      <Route path="/" element={<Layout />}>
        <Route
          path="/registration"
          element={<RegistrationPage />}
          loader={loginloader}
          action={loadingAction}
        />

        <Route path="/summary" element={<SurveyLayout />} loader={survyLoader}>
          <Route
            path="/summary"
            element={<DayLayout />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          >

            <Route
              path="/summary/edit"
              element={<EditEvent />}
              loader={async ({ request }) => {
                return await requireAuth(request);
              }}
            />
          </Route>
        </Route>
        <Route path="/rides" element={<SurveyLayout />} loader={survyLoader}>
          <Route
            path="/rides"
            element={<RidesLayout />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          >
            <Route
              path="/rides/edit"
              element={<EditEvent />}
              loader={async ({ request }) => {
                return await requireAuth(request);
              }}
            />
          </Route>
        </Route>

        <Route path="/fleet" element={<SurveyLayout />} loader={survyLoader}>
          <Route
            path="/fleet"
            element={<FleetLayout />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          >
            <Route
              path="/fleet/edit"
              element={<EditEvent />}
              loader={async ({ request }) => {
                return await requireAuth(request);
              }}
            />

          </Route>
        </Route>

        <Route path="/park" element={<SurveyLayout />} loader={survyLoader}>
          <Route
            path="/park"
            element={<ParkLayout />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          >
            <Route
              path="/park/edit"
              element={<EditEvent />}
              loader={async ({ request }) => {
                return await requireAuth(request);
              }}
            />
          </Route>
        </Route>

        <Route path="/hotleads" element={<SurveyLayout />} loader={survyLoader}>
          <Route
            path="/hotleads"
            element={<HotleadLayout />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          >
            <Route
              path="/hotleads/edit"
              element={<EditEvent />}
              loader={async ({ request }) => {
                return await requireAuth(request);
              }}
            />
          </Route>
        </Route>

      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);