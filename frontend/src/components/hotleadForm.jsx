/* eslint-disable react-refresh/only-export-components */
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ToastContainer, toast, Slide } from "react-toastify";
import { hotleadsForm } from "./api";
import { OfflineContext } from "../contextApi/offline_context";
import useOnlineStatus from "../custom_hook/useOffline";

const HotLeadForm = () => {
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
        const response = await hotleadsForm(data);
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
                placeholder="Date"
                {...register("sub_1_1")}
              />
            </div>

            <div className="input-field col s12">
              <span>Day</span>
              <br />
              <input
                id="sub_1_2"
                name="sub_1_2"
                title="Day"
                type="text"
                 placeholder="Day"
                {...register("sub_1_2")}
              />
            </div>
            <div className="input-field col s12">
              <span>Location</span>
              <br />
              <input
                id="sub_1_3"
                name="sub_1_3"
                title="location"
                type="text"
                placeholder="Location"
                {...register("sub_1_3")}
              />
            </div>

            <div className="input-field col s12">
              <span>Contact</span>
              <br />
              <input
                id="sub_1_4"
                name="sub_1_4"
                title="contact"
                type="tel"
                placeholder="Contact"
                {...register("sub_1_4")}
              />
            </div>

            <h1>Questionnaire</h1>

            <div className="input-field col s12">
              <span>1. Customer Name </span>
              <br />
              <input
                id="sub_1_5"
                name="sub_1_5"
                title="Customer Name"
                type="text"
                placeholder="Customer Name"
                {...register("sub_1_5")}
              />
            </div>

            <div className="input-field col s12">
              <span>2. MC No</span>
              <br />
              <input
                id="sub_1_6"
                name="sub_1_6"
                title="MC No"
                type="text"
                placeholder="MC No"
                {...register("sub_1_6")}
              />
            </div>

            <div className="input-field col s12">
              <span>3. Color</span>
              <br />
              <input
                id="sub_1_7"
                name="sub_1_7"
                title="Color"
                type="text"
                placeholder="Color"
                {...register("sub_17")}
              />
            </div>

            <div className="input-field col s12">
              <span>4. Executive name</span>
              <br />
              <input
                id="sub_1_8"
                name="sub_1_8"
                title="Executive name"
                type="text"
                placeholder="Exercutive Name"
                {...register("sub_1_8")}
              />
            </div>

            <div className="input-field col s12">
              <span>5. Rider/Fleet owner/Both</span>
              <br />
              <input
                id="sub_1_9"
                name="sub_1_9"
                title="Rider/Fleet owner/Both"
                type="text"
                placeholder="Rider/Fleet owner/Both"
                {...register("sub_1_9")}
              />
            </div>

            <div className="input-field col s12">
              <span>6. Age of Vehicle</span>
              <br />
              <input
                id="sub_1_10"
                name="sub_1_10"
                title="Age of vehicle"
                type="text"
                placeholder="Vehicle age"
                {...register("sub_1_10")}
              />
            </div>

            <div className="input-field col s12">
              <span>7. Buying mode (Cash / Loan)</span>
              <br />
              <select
                name="sub_1_11"
                id="sub_1_11"
                style={{ display: "block" }}
              >
                <option value="">Select your answer</option>
                <option id="cash" value="cash">
                  Cash
                </option>
                <option id="loan" value="loan">
                  Loan
                </option>
              </select>
            </div>

            <div className="input-field col s12">
              <span>8. Downpayment Available</span>
              <br />
              <input
                id="sub_1_12"
                name="sub_1_12"
                title="Downpayment"
                type="text"
                placeholder="Payment"
                {...register("sub_1_12")}
              />
            </div>

            <div className="input-field col s12">
              <span>9. Date of Follow up 1</span>
              <br />
              <input
                id="sub_1_13"
                name="sub_1_13"
                title="date "
                type="date"
                {...register("sub_1_13")}
              />
            </div>

            <div className="input-field col s12">
              <span>10. Feedaback - Follow up 1</span>
              <br />
              <input
                id="sub_1_14"
                name="sub_1_14"
                title="feedback"
                type="text"
                placeholder="Feedback"
                {...register("sub_1_14")}
              />
            </div>

            <div className="input-field col s12">
              <span>11. Date of Follow up 2</span>
              <br />
              <input
                id="sub_1_15"
                name="sub_1_15"
                title="Date of Follow up 2"
                type="date"
                {...register("sub_1_15")}
              />
            </div>

            <div className="input-field col s12">
              <span>12. Feedback - Follow up 2</span>
              <br />
              <input
                id="sub_1_16"
                name="sub_1_16"
                title="Feedback - Follow up 2"
                type="text"
                placeholder="Feedback"
                {...register("sub_1_16")}
              />
            </div>

            <div className="input-field col s12">
              <span>13. Date of Follow up 3</span>
              <br />
              <input
                id="sub_1_17"
                name="sub_1_17"
                title="Date of Follow up 3"
                type="date"
                {...register("sub_1_17")}
              />
            </div>

            <div className="input-field col s12">
              <span>14. Feedback - Follow up 3</span>
              <br />
              <input
                id="sub_1_18"
                name="sub_1_18"
                title="Feedback - Follow up 3"
                type="text"
                placeholder="Feedback"
                {...register("sub_1_18")}
              />
            </div>

            <div className="input-field col s12">
              <span>
                15. Final Closure Status(Converted / Postponed / Purchased other
                vehicle)
              </span>
              <br />
              <select
                name="sub_1_19"
                id="sub_1_19"
                style={{ display: "block" }}
              >
                <option value="">Select your answer</option>
                <option id="converted" value="converted">
                  Converted
                </option>
                <option id="postponed" value="postponed">
                  Postponed
                </option>
                <option id="purchased" value="purchased">
                  Purchased other vehicles
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

export default HotLeadForm;
