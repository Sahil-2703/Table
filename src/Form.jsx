import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "./components/Sidebar";

const Form = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="container">
      {/* <DefaultSidebar/> */}
      {/* <Sidebar/> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formcontianer">
          <div>
            <label>Name</label>
            <input {...register("name", { required: "Name is required" })} />
            {errors.name && (
              <span style={{ color: "red" }}>{errors.name.message}</span>
            )}
          </div>

          <div>
            <label>Age</label>
            <input
              type="number"
              {...register("age", {
                required: "Age is required",
                min: { value: 1, message: "Age must be greater than 0" },
              })}
            />
            {errors.age && (
              <span style={{ color: "red" }}>{errors.age.message}</span>
            )}
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email.message}</span>
            )}
          </div>
        </div>

        <div className="formcontianer">
          <div>
            <label>Phone</label>
            <input
              type="number"
              {...register("number", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number",
                },
              })}
            />
            {errors.number && (
              <span style={{ color: "red" }}>{errors.number.message}</span>
            )}
          </div>

          <div>
            <label>City</label>
            <input
              type="text"
              {...register("city", {
                required: "City name is required",
                // pattern: {
                //   value: /^[0-9]{10}$/,
                //   message: "Invalid phone number",
                // },
              })}
            />
            {/* {errors.number && (
              <span style={{ color: "red" }}>{errors.number.message}</span>
            )} */}
          </div>

          <div>
            <label>State</label>
            <input
              type="text"
              {...register("state", {
                required: "State name is required",
                // pattern: {
                //   value: /^[0-9]{10}$/,
                //   message: "Invalid phone number",
                // },
              })}
            />
            {/* {errors.number && (
              <span style={{ color: "red" }}>{errors.number.message}</span>
            )} */}
          </div>

          <div>
            <label>County</label>
            <input
              type="text"
              {...register("country", {
                required: "Country name is required",
                // pattern: {
                //   value: /^[0-9]{10}$/,
                //   message: "Invalid phone number",
                // },
              })}
            />
            {/* {errors.number && (
              <span style={{ color: "red" }}>{errors.number.message}</span>
            )} */}
          </div>

          <div>
          <label>Address</label>
            <textarea
              {...register("address", {
                required: "Address is required",
                minLength: {
                  value: 10,
                  message: "Address must be at least 10 characters long",
                },
                maxLength: {
                  value: 300,
                  message: "Address cannot exceed 300 characters",
                },
              })}
              rows={4} // Adjust the size as needed
              cols={50} // Optional, for width control
            />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
