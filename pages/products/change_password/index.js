import {useEffect} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Change_Passwordvalidation } from "../../../constants/validation";
import {
  ChangePassword_initialState,
  Change_Password,
} from "../../../utils/auth/Change_Password";
import { useRouter } from "next/router";
const ChangePassword = () => {
    const router = useRouter();
/**
 * The handleSubmit function is called when the form is submitted. It receives the values of the form
 * as a parameter
 */
  const handleSubmit = (values) => {
    if(Change_Password(values))
    {
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
      <p className="h3 text-center mt-5 mb-5">Change Password</p>
      <Formik
        initialValues={ChangePassword_initialState}
        validationSchema={Change_Passwordvalidation}
        onSubmit={handleSubmit}
      >
        <Form className="w-50 m-auto ">
          <label className="form-label">Enter Current Password</label>
          <Field
            type="password"
            name="current_password"
            className="w-100 form-control bg-secondary"
          />
          <p className="text-danger">
            <ErrorMessage name="current_password" />
          </p>
          <label className="form-label">Edit Password</label>
          <Field
            type="password"
            name="edit_password"
            className="w-100 form-control bg-secondary"
          />
          <p className="text-danger">
            <ErrorMessage name="edit_password" />
          </p>
          <label className="form-label">Confirm Edit Password</label>
          <Field
            type="password"
            name="confirm_edit_password"
            className="w-100 form-control bg-secondary"
          />
          <p className="text-danger">
            <ErrorMessage name="confirm_edit_password" />
          </p>
          <button type="submit" className="bg-primary p-2 border border-none rounded d-flex m-auto">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ChangePassword;