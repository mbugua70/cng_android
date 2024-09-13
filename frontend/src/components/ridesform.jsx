/* eslint-disable react-refresh/only-export-components */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ToastContainer, toast, Slide } from "react-toastify";
import { testridesForm } from "./api";
import { OfflineContext } from "../contextApi/offline_context";
import { FormContext } from "../contextApi/selectelement_context";
import useOnlineStatus from "../custom_hook/useOffline";

const SurveyForm = () => {
  const [isQuestion, setisQuestion] = useState(false);
  const isOnline = useOnlineStatus();
  const { addToOffline } = useContext(OfflineContext);
  const { state, dispatch } = useContext(FormContext);
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
        const response = await testridesForm(data);
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

  // handling select form element

  function handleSelectElement(e) {
    if (e.target.value === "own vehicle") {
      dispatch({ type: "SELECT_YES" });
      setisQuestion(true);
      console.log(state.showNoQuestion);
    } else {
      dispatch({ type: "SELECT_NO" });
      console.log(state.showNoQuestion);
    }
  }

  function handleSelectElementTwo(e) {
    if (e.target.value === "yes") {
      dispatch({ type: "SELECT_YES" });
      setisQuestion(true);
    } else {
      dispatch({ type: "SELECT_NO" });
      setisQuestion(true);
    }
  }

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
                placeholder="Date"
                type="date"
                {...register("sub_1_1")}
              />
            </div>

            <div className="input-field col s12">
              <span>Day</span>
              <br />
              <input
                id="sub_1_2"
                name="sub_1_2"
                placeholder="day"
                type="text"

                {...register("sub_1_2")}
              />
            </div>
            <div className="input-field col s12">
              <span>District</span>
              <br />
              <input
                id="sub_1_3"
                name="sub_1_3"
                placeholder="district"
                type="text"
                {...register("sub_1_3")}
              />
            </div>

            <div className="input-field col s12">
              <span>Executive Name </span>
              <br />
              <input
                id="sub_1_4"
                name="sub_1_4"
                placeholder="Executive Name"
                type="text"
                {...register("sub_1_4")}
              />
            </div>

            <div className="input-field col s12">
              <span>Taxi Rank/Park Name</span>
              <br />
              <input
                id="sub_1_5"
                name="sub_1_5"
                placeholder="Taxi Rank/Park Name"
                type="text"
                {...register("sub_1_5")}
              />
            </div>

            <h1>Questionnaire</h1>

            <div className="input-field col s12">
              <span>1. CNG Vehicle Registration</span>
              <br />
              <input
                id="sub_1_6"
                name="sub_1_6"
                placeholder="RSM"
                type="text"
                {...register("sub_1_6")}
              />
            </div>

            <h1>Rider Details</h1>

            <div className="input-field col s12">
              <span>1. Rider Name</span>
              <br />
              <input
                id="sub_1_7"
                name="sub_1_7"
                placeholder="Rider Name"
                type="text"
                {...register("sub_1_7")}
              />
            </div>

            <div className="input-field col s12">
              <span>2. Rider Contact</span>
              <br />
              <input
                id="sub_1_8"
                name="sub_1_8"
                placeholder="Rider Contact"
                type="tel"
                {...register("sub_1_8")}
              />
            </div>

            <div className="input-field col s12">
              <span>3. Vehicle Name</span>
              <br />
              <input
                id="sub_1_9"
                name="sub_1_9"
                placeholder="Vehicle Name"
                type="text"
                {...register("sub_1_9")}
              />
            </div>

            <div className="input-field col s12">
              <span>4. Age of Vehicle?</span>
              <br />
              <input
                id="sub_1_10"
                name="sub_1_10"
                placeholder="Age of Vehicle"
                type="text"
                {...register("sub_1_10")}
              />
            </div>

            {/* display state */}

            <div className="input-field col s12">
              <span>5. Is it own vehicle or rental/hire purchase?</span>
              <br />
              <select
                name="sub_1_11"
                id="sub_1_11"
                onInput={handleSelectElement}
                style={{ display: "block" }}
                {...register("sub_1_11")}
              >
                <option value="">Select your answer</option>
                <option id="own vehicle" value="own vehicle">
                  Own vehicle
                </option>
                <option id="rental" value="rental">
                  Rental
                </option>
                <option id="hire purchase" value="hire purchase">
                  Hire purchase
                </option>
              </select>
            </div>

            {state.showNoQuestion && (
              <div className="input-field col s12">
                <span>
                  6. If it is riders own vehicle - is it paid up in Cash or on
                  Loan?
                </span>
                <br />
                <select
                  name="sub_1_12"
                  id="sub_1_12"
                  style={{ display: "block" }}
                  {...register("sub_1_12")}
                >
                  <option value="">Select your answer</option>
                  <option id="cash" value="cash">
                    cash
                  </option>
                  <option id="loan" value="loan">
                    loan
                  </option>
                </select>
              </div>
            )}

            <h1>Rider Feedback</h1>

            <div className="input-field col s12">
              <span>
                1. What is your overal key feedback on RE Petrol & CNG
              </span>
              <br />
              <input
                id="sub_1_13"
                name="sub_1_13"
                placeholder="Re Petrol & CNG feedback"
                type="text"
                {...register("sub_1_13")}
              />
            </div>

            <div className="input-field col s12">
              <span>
                2. Petrol tank size 8 ltr ( 1 to 10, 10 means excellent, 1 means
                poor)
              </span>
              <br />
              <select
                name="sub_1_14"
                id="sub_1_14"
                style={{ display: "block" }}
                {...register("sub_1_14")}
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
              <span>
                3. CNG size 4KG ( 1 to 10, 10 means excellent, 1 means poor)
              </span>
              <br />
              <select
                name="sub_1_15"
                id="sub_1_15"
                style={{ display: "block" }}
                {...register("sub_1_15")}
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
              <span>4. Power( 1 to 10, 10 means excellent, 1 means poor)</span>
              <br />
              <select
                name="sub_1_16"
                id="sub_1_16"
                style={{ display: "block" }}
                {...register("sub_1_16")}
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
              <span>
                5. Range performance ( means distance travel due to 8ltr petrol
                and CNG) ( 1 to 10, 10 means excellent, 1 means poor)
              </span>
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
              <span>
                6. Price offer( 1 to 10, 10 means excellent, 1 means poor)
              </span>
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

            {/* state display management */}

            <div className="input-field col s12">
              <span>7. Will You Recommend / Consider CNG ?</span>
              <br />
              <select
                name="sub_1_19"
                id="sub_1_19"
                onInput={handleSelectElementTwo}
                style={{ display: "block" }}
                {...register("sub_1_19")}
              >
                <option value="">Select your answer</option>
                <option id="yes" value="yes">
                  Yes
                </option>
                <option id="no" value="no">
                  No
                </option>
              </select>
            </div>

            {state.showNoQuestion && isQuestion && (
              <div className="input-field col s12">
                <span>8. Reason for Yes</span>
                <br />
                <input
                  id="sub_1_20"
                  name="sub_1_20"
                  placeholder="YES"
                  type="text"
                  {...register("sub_1_20")}
                />
              </div>
            )}

            {!state.showNoQuestion && isQuestion && (
              <div className="input-field col s12">
                <span>9. Reason for No</span>
                <br />
                <input
                  id="sub_1_21"
                  name="sub_1_21"
                  placeholder="NO"
                  type="text"
                  {...register("sub_1_21")}
                />
              </div>
            )}

            <h1>CONVERSIONS & LEADS</h1>
            <div className="input-field col s12">
              <span>1. Are you willing to Buy the New CNG?</span>
              <br />
              <select
                name="sub_1_22"
                id="sub_1_22"
                style={{ display: "block" }}
                {...register("sub_1_22")}
              >
                <option value="">Select your answer</option>
                <option id="yes" value="yes">
                  Yes
                </option>
                <option id="no" value="no">
                  No
                </option>
              </select>
            </div>

            <div className="input-field col s12">
              <span>2. When would you like to buy it (days / months)?</span>
              <br />
              <input
                id="sub_1_23"
                name="sub_1_23"
                placeholder="Days/ Months"
                type="text"
                {...register("sub_1_23")}
              />
            </div>

            <div className="input-field col s12">
              <span>3. Hot leads (Yes (1-2 months) / NO)?</span>
              <br />
              <select
                name="sub_1_24"
                id="sub_1_24"
                style={{ display: "block" }}
                {...register("sub_1_24")}
              >
                <option value="">Select your answer</option>
                <option id="yes" value="yes">
                  Yes
                </option>
                <option id="no" value="no">
                  No
                </option>
              </select>
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
