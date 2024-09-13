
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */

// import React from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {  Form,redirect,  useActionData, useNavigation, useLoaderData } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";

import { loginUser } from "./api";
import { useEffect } from "react";

export const loginloader = ({ request }) => {
  return new URL(request.url).searchParams.get("message");
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const ba_name = formData.get("ba_name");
  const ba_phone = formData.get("ba_phone");
  const ba_region = formData.get("ba_region");
  console.log(ba_name, ba_region, ba_phone);
  if (!ba_region || !ba_name || !ba_phone) {
    return "Please fill all the required fields";
  }

  if (!ba_region) {
    return "Please fill in the location field";
  }
  const formdata = new FormData();
  formdata.append("ba_name", ba_name);
  formdata.append("ba_region", ba_region);
  formdata.append("ba_phone", ba_phone);
  // const pathname = new URL(request.url).searchParams.get("redirectTo") || "/survey"
  try {
    const ba_name = formdata.get("ba_name");
    const ba_phone = formdata.get("ba_phone");
    const ba_region = formdata.get("ba_region");

    const workout = { ba_name, ba_phone, ba_region };

    localStorage.setItem("Auth", JSON.stringify({ user: workout }));

    const storeOne = localStorage.getItem("Auth");
    const storeTwo = JSON.parse(storeOne);
    const isUser = storeTwo.user;

    // const data = await loginUser(workout);
    if (isUser) {
      // const loginData = JSON.stringify(data);
      // localStorage.setItem("Auth", loginData);
      setTimeout(() => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          html: <i>You have registered successfully!</i>,
          icon: "success",
        });
      }, 2000);
    }

    return redirect("/");
  } catch (err) {
    console.error("err", err.syntaxError);
    return "Failed to register";
  }
};

// react toastify
const registration_error_id = "login ba error";

const notifyError = (msg) => {
  toast.error(`${msg}`, {
    toastId: registration_error_id,
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

const RegistrationPage = () => {
  const loginLoaderMessage = useLoaderData();

  const navigation = useNavigation();

  const errorMessage = useActionData();
  console.log(errorMessage);

  const storeBa = localStorage.getItem("Auth");
  const storeBaTwo = JSON.parse(storeBa);

  useEffect(() => {
    if (errorMessage) {
      notifyError(errorMessage);
      console.log("rendered");
    }
  }, [errorMessage]);

  useEffect(() => {
    if (loginLoaderMessage) {
      notifyError(loginLoaderMessage);
    }
  }, [loginLoaderMessage]);

  return (
    <>
      {/* Bajaj code */}
      <div className="main_body">
        <div className="row" id="top_row">
          <div className="row parcel_form">
            <div className="parentError">
              {/* <span>
                {loginLoaderMessage === null ? (
                  ""
                ) : (
                  <i className="material-icons">error</i>
                )}
              </span> */}
              {/* <p className="login_errmessage">{errorMessage && errorMessage}</p> */}
            </div>
            <Form id="parcel_form" method="post" replace>
              <div className="input-field col s12">
                <span>Name</span>
                <br />
                <input
                  id="ba_name"
                  name="ba_name"
                  placeholder="Your Name"
                  type="text"
                  defaultValue={
                    storeBaTwo === null ? "" : storeBaTwo.user.ba_name
                  }
                />
              </div>
              <div className="input-field col s12">
                <span>Your Phone Number</span>
                <br />
                <input
                  id="ba_phone"
                  name="ba_phone"
                  placeholder="Your Phone Number"
                  type="tel"
                  defaultValue={
                    storeBaTwo === null ? "" : storeBaTwo.user.ba_phone
                  }
                />
              </div>
              <div className="input-field col s12">
                <span>Region</span>
                <br />
                <input
                  id="ba_region"
                  name="ba_region"
                  placeholder="Location"
                  type="text"
                  defaultValue={
                    storeBaTwo === null ? "" : storeBaTwo.user.ba_region
                  }
                />
              </div>
              <div className="input-field col s12 center_it">
                <button
                  id="register_btn"
                  className="btn-large  margin-bottom waves-effect waves-light pick_color"
                  disabled={navigation.state === "submitting"}
                >
                  {navigation.state === "submitting"
                    ? "registering"
                    : "Register"}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default RegistrationPage;