/* eslint-disable react-refresh/only-export-components */
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ToastContainer, toast, Slide } from "react-toastify";
import { surveyForm } from "./api";
import { OfflineContext } from "../contextApi/offline_context";
import useOnlineStatus from "../custom_hook/useOffline";

const SurveyForm = () => {
  const isOnline = useOnlineStatus();
  const { addToOffline } = useContext(OfflineContext);
  const form = useForm({
    defaultValues: {
      sub_1_1: "",
      sub_1_2: "",
      sub_1_3: "",
      sub_1_4: "",
      sub_1_5: "",
      sub_1_6: "",
      sub_1_7: "",
      sub_1_8: "",
      sub_1_10: "",
      sub_1_11: "",
      sub_1_12: "",
      sub_1_13: "",
      sub_1_14: "",
      sub_1_15: "",
      sub_1_16: "",
      sub_1_17: "",
      sub_1_18: "",
      sub_1_19: "",
      sub_1_20: "",
      sub_1_21: "",
      sub_1_22: "",
      sub_1_23: "",
      sub_1_24: "",
      sub_1_25: "",
      sub_1_26: "",
      sub_1_27: "",
      sub_1_28: "",
      sub_1_29: "",
      sub_1_30: "",
    },
  });

  const { register, handleSubmit, reset, formState } = form;
  const { isSubmitSuccessful, isSubmitting } = formState;

  const onSubmit = async (data) => {

      try {

        const {sub_1_1, sub_1_2, sub_1_3, sub_1_4, sub_1_5} = data;
        if(sub_1_1 === "" || sub_1_2 === "" || sub_1_3 === "" || sub_1_4 === "" || sub_1_5 === "") {
          event.preventDefault();
          toast.error("Please fill in all the required fields!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
          });
        }else{
          const response = await surveyForm(data);
          if (response) {
            const MySwal = withReactContent(Swal);
            MySwal.fire({
              html: <i>Your data has been submitted successfully!</i>,
              icon: "success",
            });
          }
        }

      } catch (err) {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          html: <i>{err.message}</i>,
          icon: "error",
        });
      }

  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <div className="main_body">
        <div className="row parcel_form">
          <form
            className="form"
            id="form"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1>LOCATION DETAILS</h1>

            <div className="input-field col s12">
              <span>Date</span>
              <br />
              <input
                id="sub_1_1"
                name="sub_1_1"
                title="Date"

                type="date"
                {...register("sub_1_1")}
              />
            </div>

            <div className="input-field col s12">
              <span>Region</span>
              <br />
              <input
                id="sub_1_2"
                name="sub_1_2"
                title="Region"
                placeholder="Region"
                type="text"
                {...register("sub_1_2")}
              />
            </div>
            <div className="input-field col s12">
              <span>Location</span>
              <br />
              <input
                id="sub_1_3"
                name="sub_1_3"
                title="Location"
                placeholder="Location"
                type="text"
                {...register("sub_1_3")}
              />
            </div>
            <div className="input-field col s12">
              <span>Town</span>
              <br />
              <input
                id="sub_1_4"
                name="sub_1_4"
                title="Town"
                placeholder="Town"
                type="text"
                {...register("sub_1_4")}
              />
            </div>
            <h1>Questionnaire</h1>

            <div className="input-field col s12">
              <span>1. Field Officer Name </span>
              <br />
              <input
                id="sub_1_5"
                name="sub_1_5"
                title="Field Officer Name"
                type="text"
                placeholder="Officer Name"
                {...register("sub_1_5")}
              />
            </div>

            <div className="input-field col s12">
              <span>2. Rider Name </span>
              <br />
              <input
                id="sub_1_6"
                name="sub_1_6"
                title="Rider name"
                placeholder="Rider name"
                type="tel"
                {...register("sub_1_6")}
              />
            </div>

            <div className="input-field col s12">
              <span>3. Phone Number </span>
              <br />
              <input
                id="sub_1_7"
                name="sub_1_7"
                title="Phone Number "
                placeholder="Tel"
                type="tel"
                {...register("sub_1_7")}
              />
            </div>

            <div className="input-field col s12">
              <span>4. Current bike with model name cc</span>
              <br />
              <input
                id="sub_1_8"
                name="sub_1_8"
                title="Current bike"
                type="text"
                placeholder="Current Bike"
                {...register("sub_1_8")}
              />
            </div>

            <div className="input-field col s12">
              <span>5. Application </span>
              <br />
              <select
                name="sub_1_9"
                id="sub_1_9"
                style={{ display: "block" }}
                {...register("sub_1_9")}
              >
                <option value="">Select your answer</option>
                <option id="bodaboda" value="Boda Boda">
                  Only Passenger
                </option>
                <option id="personal" value="Application use">
                  Only Load
                </option>
                <option id="personal" value="Application use">
                  Dual Usage
                </option>
              </select>
            </div>

            <div className="input-field col s12">
              <span>
                6. In case of passenger - how many customers sitting at back?
              </span>
              <br />
              <input
                id="sub_1_10"
                name="sub_1_10"
                title="Number of passenger"
                type="text"
                placeholder="Number of passenger"
                {...register("sub_1_10")}
              />
            </div>

            <div className="input-field col s12">
              <span>
                7. In case of load carrying - how many kg load and what type of
                load?
              </span>
              <br />
              <input
                id="sub_1_11"
                name="sub_1_11"
                title="Load in kg"
                type="text"
                placeholder="Load in kg"
                {...register("sub_1_11")}
              />
            </div>

            <div className="input-field col s12">
              <span>
                8. What factors you consider to purchase bike for boda boda
                usage?
              </span>
              <br />
              <input
                id="sub_1_12"
                name="sub_1_12"
                title="Purchase consideration"
                type="text"
                placeholder="Factor to consider"
                {...register("sub_1_12")}
              />
            </div>

            <div className="input-field col s12">
              <span>9. Best Likes in your current bike?</span>
              <br />
              <input
                id="sub_1_13"
                name="sub_1_13"
                title="Best Like"
                type="text"
                placeholder="Best likes"
                {...register("sub_1_13")}
              />
            </div>

            <div className="input-field col s12">
              <span>10. Dislike in your current bike?</span>
              <br />
              <input
                id="sub_1_14"
                name="sub_1_14"
                title="Bike Dislike"
                type="text"
                placeholder="Dislike"
                {...register("sub_1_14")}
              />
            </div>

            <div className="input-field col s12">
              <span>11. Are you aware of Boxer 125 HD?</span>
              <br />
              <select
                name="sub_1_15"
                id="sub_1_15"
                style={{ display: "block" }}
                className="select_element"
                {...register("sub_1_15")}
              >
                <option value="">Select your answer</option>
                <option id="yes_15" className="yes" value="yes">
                  Yes
                </option>
                <option id="no_15" className="no" value="no">
                  No
                </option>
              </select>
            </div>

            <div
              className="input-field col s12"
              id="ownerone"
              style={{ display: "none" }}
            >
              <span>12. If Yes then what do understand by HD?</span>
              <br />
              <input
                id="sub_1_16"
                name="sub_1_16"
                title="HD meaning"
                type="text"
                placeholder="Enter your answer"
                {...register("sub_1_16")}
              />
            </div>

            <h1>
              Post Test Ride - Rating from 1 to 10 ( 1 poor …10 Excellent)
            </h1>

            <div className="input-field col s12">
              <span>1. Seat</span>
              <br />
              <select
                name="sub_1_17"
                id="sub_1_17"
                style={{ display: "block" }}
                {...register("sub_1_17")}
              >
                <option value="">Select your answer</option>
                <option id="" value="1">
                  1
                </option>
                <option id="" value="2">
                  2
                </option>
                <option id="" value="3">
                  3
                </option>
                <option id="" value="4">
                  4
                </option>
                <option id="" value="5">
                  5
                </option>
                <option id="" value="6">
                  6
                </option>
                <option id="" value="7">
                  7
                </option>
                <option id="" value="8">
                  8
                </option>
                <option id="" value="9">
                  9
                </option>
                <option id="" value="10">
                  10
                </option>
              </select>
            </div>

            <div className="input-field col s12">
              <span>2. Riding Comfort</span>
              <br />
              <select
                name="sub_1_18"
                id="sub_1_18"
                style={{ display: "block" }}
                {...register("sub_1_18")}
              >
                <option value="">Select your answer</option>
                <option id="" value="1">
                  1
                </option>
                <option id="" value="2">
                  2
                </option>
                <option id="" value="3">
                  3
                </option>
                <option id="" value="4">
                  4
                </option>
                <option id="" value="5">
                  5
                </option>
                <option id="" value="6">
                  6
                </option>
                <option id="" value="7">
                  7
                </option>
                <option id="" value="8">
                  8
                </option>
                <option id="" value="9">
                  9
                </option>
                <option id="" value="10">
                  10
                </option>
              </select>
            </div>

            <div className="input-field col s12">
              <span>3. Carrier</span>
              <br />
              <select
                name="sub_1_19"
                id="sub_1_19"
                style={{ display: "block" }}
                {...register("sub_1_19")}
              >
                <option value="">Select your answer</option>
                <option id="" value="1">
                  1
                </option>
                <option id="" value="2">
                  2
                </option>
                <option id="" value="3">
                  3
                </option>
                <option id="" value="4">
                  4
                </option>
                <option id="" value="5">
                  5
                </option>
                <option id="" value="6">
                  6
                </option>
                <option id="" value="7">
                  7
                </option>
                <option id="" value="8">
                  8
                </option>
                <option id="" value="9">
                  9
                </option>
                <option id="" value="10">
                  10
                </option>
              </select>
            </div>

            <div className="input-field col s12">
              <span>4. Suspension</span>
              <br />
              <select
                name="sub_1_20"
                id="sub_1_20"
                style={{ display: "block" }}
                {...register("sub_1_20")}
              >
                <option value="">Select your answer</option>
                <option id="" value="1">
                  1
                </option>
                <option id="" value="2">
                  2
                </option>
                <option id="" value="3">
                  3
                </option>
                <option id="" value="4">
                  4
                </option>
                <option id="" value="5">
                  5
                </option>
                <option id="" value="6">
                  6
                </option>
                <option id="" value="7">
                  7
                </option>
                <option id="" value="8">
                  8
                </option>
                <option id="" value="9">
                  9
                </option>
                <option id="" value="10">
                  10
                </option>
              </select>
            </div>
            <div className="input-field col s12">
              <span>5. Engine</span>
              <br />
              <select
                name="sub_1_21"
                id="sub_1_21"
                style={{ display: "block" }}
                {...register("sub_1_21")}
              >
                <option value="">Select your answer</option>
                <option id="" value="1">
                  1
                </option>
                <option id="" value="2">
                  2
                </option>
                <option id="" value="3">
                  3
                </option>
                <option id="" value="4">
                  4
                </option>
                <option id="" value="5">
                  5
                </option>
                <option id="" value="6">
                  6
                </option>
                <option id="" value="7">
                  7
                </option>
                <option id="" value="8">
                  8
                </option>
                <option id="" value="9">
                  9
                </option>
                <option id="" value="10">
                  10
                </option>
              </select>
            </div>

            <div className="input-field col s12">
              <span>6. Power</span>
              <br />
              <select
                name="sub_1_22"
                id="sub_1_22"
                style={{ display: "block" }}
                {...register("sub_1_22")}
              >
                <option value="">Select your answer</option>
                <option id="" value="1">
                  1
                </option>
                <option id="" value="2">
                  2
                </option>
                <option id="" value="3">
                  3
                </option>
                <option id="" value="4">
                  4
                </option>
                <option id="" value="5">
                  5
                </option>
                <option id="" value="6">
                  6
                </option>
                <option id="" value="7">
                  7
                </option>
                <option id="" value="8">
                  8
                </option>
                <option id="" value="9">
                  9
                </option>
                <option id="" value="10">
                  10
                </option>
              </select>
            </div>

            <div className="input-field col s12">
              <span>7. Speed</span>
              <br />
              <select
                name="sub_1_23"
                id="sub_1_23"
                style={{ display: "block" }}
                {...register("sub_1_23")}
              >
                <option value="">Select your answer</option>
                <option id="" value="1">
                  1
                </option>
                <option id="" value="2">
                  2
                </option>
                <option id="" value="3">
                  3
                </option>
                <option id="" value="4">
                  4
                </option>
                <option id="" value="5">
                  5
                </option>
                <option id="" value="6">
                  6
                </option>
                <option id="" value="7">
                  7
                </option>
                <option id="" value="8">
                  8
                </option>
                <option id="" value="9">
                  9
                </option>
                <option id="" value="10">
                  10
                </option>
              </select>
            </div>

            <div className="input-field col s12">
              <span>8. Load Carrying Ability</span>
              <br />
              <select
                name="sub_1_24"
                id="sub_1_24"
                style={{ display: "block" }}
                {...register("sub_1_24")}
              >
                <option value="">Select your answer</option>
                <option id="" value="1">
                  1
                </option>
                <option id="" value="2">
                  2
                </option>
                <option id="" value="3">
                  3
                </option>
                <option id="" value="4">
                  4
                </option>
                <option id="" value="5">
                  5
                </option>
                <option id="" value="6">
                  6
                </option>
                <option id="" value="7">
                  7
                </option>
                <option id="" value="8">
                  8
                </option>
                <option id="" value="9">
                  9
                </option>
                <option id="" value="10">
                  10
                </option>
              </select>
            </div>

            <h1>Feedback</h1>
            <div className="input-field col s12">
              <span>
                1. What best feature you like post test ride in Boxer 125HD?
              </span>
              <br />
              <input
                id="sub_1_25"
                name="sub_1_25"
                title="Feedback"
                type="text"
                placeholder="Feature"
                {...register("sub_1_25")}
              />
            </div>

            <div className="input-field col s12">
              <span>
                2. What best you like in this Boxer 125HD over your current
                bike?
              </span>
              <br />
              <input
                id="sub_1_26"
                name="sub_1_26"
                title="Feedback"
                type="text"
                placeholder="Feedback"
                {...register("sub_1_26")}
              />
            </div>

            <div className="input-field col s12">
              <span>3. Any other comment - postive or negative?</span>
              <br />
              <input
                id="sub_1_27"
                name="sub_1_27"
                title="Feedback"
                type="text"
                placeholder="Comment"
                {...register("sub_1_27")}
              />
            </div>

            <div className="input-field col s12">
              <span>
                4. Will recommend/Consider this bike for you or your friend?
              </span>
              <br />
              <select
                name="sub_1_28"
                id="sub_1_28"
                style={{ display: "block" }}
                className="select_element"
                {...register("sub_1_28")}
              >
                <option value="">Select your answer</option>
                <option id="yes_4" className="yes" value="yes">
                  Yes
                </option>
                <option id="no_4" className="no" value="no">
                  No
                </option>
              </select>
            </div>

            <div
              className="input-field col s12"
              id="ownerone_v2"
              style={{ display: "none" }}
            >
              <span>5. Reason Yes</span>
              <br />
              <input
                id="sub_1_29"
                name="sub_1_29"
                title="Reason Yes"
                type="text"
                placeholder="Reason for yes"
                {...register("sub_1_29")}
              />
            </div>

            <div
              className="input-field col s12"
              id="ownertwo_v2"
              style={{ display: "none" }}
            >
              <span>6. Reason No</span>
              <br />
              <input
                id="sub_1_30"
                name="sub_1_30"
                title="Reason No"
                type="text"
                placeholder="Reason for no"
                {...register("sub_1_30")}
              />
            </div>

            <div className="input-field col s12 center_it">
              <button
                className="btn-large  margin-bottom waves-effect waves-light pick_color"
                id="hide_icons"
                disabled={isSubmitting}
              >
                {isSubmitting ? <>submitting </> : <>submit </>}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SurveyForm;