import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import SuccessPng from "../assets/tick.png";

const Request = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Request Product - Gadget Heaven</title>
        </Helmet>
        <div>
          <div className="bg-primary pt-8 pb-72 text-center relative">
            <h2 className="text-3xl font-bold text-banner-content">
              Request Product
            </h2>
            <p className="max-w-xl mx-auto text-base font-normal text-banner-content mt-4">
              Use this form to request your ideal gadget. Choose the gadget
              type, specify brand, model, and customizations, and add any
              accessories you need.
            </p>
          </div>
          <div className="bg-base-100 py-8 px-6 rounded-3xl absolute top-60 left-0 right-0 mx-auto max-w-screen-md">
            <h2 className="text-2xl font-bold text-base-content text-center">
              Gadget Request Form
            </h2>
            <div className="space-y-6 mt-8">
              <div>
                <h3 className="text-lg mb-4 text-base-content">
                  1. Gadget Type
                </h3>
                <select className="select select-bordered w-full">
                  <option disabled selected>
                    Select
                  </option>
                  <option>Smartphones</option>
                  <option>Laptops</option>
                  <option>Headphones</option>
                  <option>Monitors</option>
                  <option>others</option>
                </select>
              </div>
              <div>
                <label className="text-base mb-1 text-base-content-secondary">
                  Brand and Model
                </label>
                <input
                  type="text"
                  placeholder="e.g. Apple iPhone 15, Samsung Galaxy Tab S9"
                  className="input input-bordered w-full"
                />
              </div>
              <hr />
              <div>
                <h3 className="text-lg mb-4 text-base-content">2. Quantity</h3>
                <label className="text-base mb-1 text-base-content-secondary">
                  Number of Units
                </label>
                <input
                  type="text"
                  placeholder="Enter number"
                  className="input input-bordered w-full"
                />
              </div>
              <hr />
              <div>
                <h3 className="text-lg mb-4 text-base-content">
                  3. User Details
                </h3>
                <label className="text-base mb-1 text-base-content-secondary">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="First and Last Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="text-base mb-1 text-base-content-secondary">
                  Email Address
                </label>
                <input
                  type="text"
                  placeholder="For updates and confirmations"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="text-base mb-1 text-base-content-secondary">
                  Shipping Address
                </label>
                <input
                  type="text"
                  placeholder="Street Address, City, State/Province, Zip/Postal code, Country"
                  className="input input-bordered w-full"
                />
              </div>
              <hr />
              <div>
                <h3 className="text-lg mb-4 text-base-content">
                  4. Special Instructions (Optional)
                </h3>
                <label className="block text-base mb-1 text-base-content-secondary">
                  Additional Notes or Special Requests
                </label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="e.g., Expedited shipping, gift wrap, etc"
                ></textarea>
              </div>
            </div>
            <button
              onClick={() => document.getElementById("my_modal_1").showModal()}
              className="mt-8 w-full py-3 bg-primary rounded-full text-primary-content font-semibold hover:opacity-80"
            >
              Submit Request
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box max-w-96">
                <div className="flex justify-center">
                  <img src={SuccessPng} alt="" />
                </div>
                <h3 className="mt-6 font-bold text-2xl text-center text-base-content">
                  Request Submitted Successfully!
                </h3>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-base text-base-content-secondary text-center">
                    Your request for a gadget has been successfully submitted.
                    We’ll review the details and get back to you shortly.
                  </p>
                  <p className="text-base text-base-content-secondary text-center"></p>
                </div>
                <div className="modal-action block">
                  <form method="dialog">
                    <button className="btn w-full rounded-full">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </HelmetProvider>
    </>
  );
};

export default Request;
