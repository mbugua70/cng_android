/* eslint-disable react-refresh/only-export-components */
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ToastContainer, toast, Slide } from "react-toastify";
import { summaryForm } from "./api";
import { OfflineContext } from "../contextApi/offline_context";
import useOnlineStatus from "../custom_hook/useOffline";

const DaySummaryForm = () => {
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
    },
  });

  const { register, handleSubmit, reset, formState } = form;
  const { isSubmitSuccessful, isSubmitting } = formState;

  const onSubmit = async (data) => {

      try {

        const {sub_1_1, sub_1_2, sub_1_3, sub_1_4, sub_1_5} = data;
        if(sub_1_1 === "" || sub_1_2 === "" || sub_1_3 === "" || sub_1_4 === "" || sub_1_5 === "") {
          event.preventDefault()
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

          const response = await summaryForm(data);
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
              <span>DATE</span>
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
                title="day"
                type="text"
                placeholder="Day"
                {...register("sub_1_2")}
              />
            </div>
            <div className="input-field col s12">
              <span>District</span>
              <br />
              <input
                id="sub_1_3"
                name="sub_1_3"
                title="district"
                type="text"
                placeholder="District"
                {...register("sub_1_3")}
              />
            </div>
            <h1>Questionnaire</h1>

            <div className="input-field col s12">
              <span>1. Number of vehicle?</span>
              <br />
              <input
                id="sub_1_4"
                name="sub_1_4"
                title="vehicle number"
                type="text"
                placeholder="Enter vehicle number"
                {...register("sub_1_4")}
              />
            </div>

            <div className="input-field col s12">
              <span>2. Number of park?</span>
              <br />
              <input
                id="sub_1_5"
                name="sub_1_5"
                title="park number"
                type="text"
                placeholder="Enter number of park"
                {...register("sub_1_5")}
              />
            </div>

            <div className="input-field col s12">
              <span>3. Number of Rider contacted?</span>
              <br />
              <input
                id="sub_1_6"
                name="sub_1_6"
                title="Riders Contacted"
                type="text"
                placeholder="Rider contacted"
                {...register("sub_1_6")}
              />
            </div>

            <div className="input-field col s12">
              <span>4. Number of Rider test ride given?</span>
              <br />
              <input
                id="sub_1_7"
                name="sub_1_7"
                title="rider test"
                type="text"
                placeholder="Riders test given"
                {...register("sub_1_7")}
              />
            </div>

            <div className="input-field col s12">
              <span>5. Feedback from rider/FO- 3 positive?</span>
              <br />
              <input
                id="sub_1_8"
                name="sub_1_8"
                title="positive"
                type="text"
                placeholder="Positive"
                {...register("sub_1_8")}
              />
            </div>

            <div className="input-field col s12">
              <span>6. Feedback from rider/FO -3 expectation?</span>
              <br />
              <input
                id="sub_1_9"
                name="sub_1_9"
                title="expectation"
                type="text"
                placeholder="Expectation"
                {...register("sub_1_9")}
              />
            </div>

            <div className="input-field col s12">
              <span>7. Top leads - 15 days purchase?</span>
              <br />
              <input
                id="sub_1_10"
                name="sub_1_10"
                title="15 days purchase"
                type="text"
                placeholder="Top lead purchase"
                {...register("sub_1_10")}
              />
            </div>

            <div className="input-field col s12">
              <span>8. Hot leads - 1 to 2 months?</span>
              <br />
              <input
                id="sub_1_11"
                name="sub_1_11"
                title="1 to 2 months"
                type="text"
                placeholder="Hot leads"
                {...register("sub_1_11")}
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

export default DaySummaryForm;
