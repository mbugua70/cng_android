/* eslint-disable react-refresh/only-export-components */
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ToastContainer, toast, Slide } from "react-toastify";
import { fleetForm } from "./api";
import { OfflineContext } from "../contextApi/offline_context";
import useOnlineStatus from "../custom_hook/useOffline";

const FleetForm = () => {
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
          const response = await fleetForm(data);
          console.log(response);
          if (response) {
            const MySwal = withReactContent(Swal);
            MySwal.fire({
              html: <i>Your data has been submitted successfully!</i>,
              icon: "success",
            });
          }
        }

      } catch (err) {
        console.log(err);
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
                title="Day"
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
                title="District"
                type="text"
                placeholder="District"
                {...register("sub_1_3")}
              />
            </div>

            <div className="input-field col s12">
              <span>Taxi Rank/Park Name</span>
              <br />
              <input
                id="sub_1_4"
                name="sub_1_4"
                title="Taxi Rank/Park Name"
                type="text"
                placeholder="Tax Rank/Park Name"
                {...register("sub_1_4")}
              />
            </div>
            <h1>FLEET OWNERS DETAILS</h1>

            <div className="input-field col s12">
              <span>1. Fleet Operator name?</span>
              <br />
              <input
                id="sub_1_5"
                name="sub_1_5"
                title="Fleet Operator name"
                type="text"
                placeholder="Operator Name"
                {...register("sub_1_5")}
              />
            </div>

            <div className="input-field col s12">
              <span>2. Fleet owner contact </span>
              <br />
              <input
                id="sub_1_6"
                name="sub_1_6"
                title="Fleet Owner contact"
                type="text"
                placeholder="Owner Contact"
                {...register("sub_1_6")}
              />
            </div>

            <div className="input-field col s12">
              <span>3. How many vehicles?</span>
              <br />
              <input
                id="sub_1_7"
                name="sub_1_7"
                title="Number vehicle"
                type="text"
                placeholder="Number of vehicle"
                {...register("sub_1_7")}
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

export default FleetForm;
