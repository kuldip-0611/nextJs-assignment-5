import React, { useState, useEffect } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

import { Edit_profilevalidation } from "../../../constants/validation.js";
import { getProfile_data, Update_profile_data } from "../../../utils/auth/Change_Profile";
import { useRouter } from "next/router.js";

console.log(localStorage.getItem("loginData"));
const ProfileEdit = () => {

  const [data] = useState(getProfile_data());
  const router = useRouter();

  const initialState = {
    fname: data[0].fname,
    lname: data[0].lname,
    email: data[0].email,
    mobile: data[0].mobile,
  };

  const handleSubmit = (values) => {

    if(Update_profile_data(values)){
      router.push('/products')
    }
    


  };
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('isLogin')) === false || localStorage.getItem('isLogin') === null) {
      router.push('/')
    }
  }, [])
  return (
    <div>
      <p className="h3 text-center mb-5 mt-5">Edit Your Details</p>
      <Formik
        initialValues={initialState}
        validationSchema={Edit_profilevalidation}
        onSubmit={handleSubmit}
      >
        <Form className="w-50 m-auto ">
          <label className="form-label">Your First Name</label>
          <Field
            type="text"
            name="fname"
            className="w-100 form-control"
            id="form3Example1c"
          />
          <p className="text-danger">
            <ErrorMessage name="fname" />
          </p>
          <label className="form-label">Your Last Name</label>
          <Field
            type="text"
            name="lname"
            className="w-100 form-control"
            id="form3Example1c"
          />

          <label className="form-label">Your Email</label>
          <Field type="email" name="email" className="w-100 form-control" />
          <p className="text-danger">
            <ErrorMessage name="email" />
          </p>
          <label className="form-label">Mobile Number</label>
          <Field type="number" name="mobile" className="w-100 form-control" />
          <p className="text-danger">
            <ErrorMessage name="mobile" />
          </p>
          <button type="submit" className="bg-primary p-2 border border-none rounded d-flex m-auto">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ProfileEdit;