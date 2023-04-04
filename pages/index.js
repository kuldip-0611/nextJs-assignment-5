import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from "formik";

import {Loginvalidation} from '../constants/validation';


import { Login_Auth } from "@/utils/auth/Login_Auth";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const initialState = {
  email: "",
  password: "",
};

function LoginForm() {
 
  const router = useRouter();
  const handleSubmit = (values) => {
    if(localStorage.getItem('loginData') === null){
      toast.error('there no data in login database as you entered')
    }
    if (Login_Auth(values)) {
      router.push("/products");
    }
  };
  return (
    <>
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form"
                className="rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  
                </div>

                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign into your account
                </h5>

                <Formik
                  initialValues={initialState}
                  validationSchema={Loginvalidation}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <label className="form-label">Your Email</label>
                    <Field
                      type="email"
                      name="email"
                      className="w-100 form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="email" />
                    </p>

                    <label className="form-label">Your Password</label>
                    <Field
                      type="password"
                      name="password"
                      className="w-100 form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="password" />
                    </p>

                    <MDBBtn
                      type="submit"
                      className="mb-4 px-5"
                      color="dark"
                      size="lg"
                    >
                      Login
                    </MDBBtn>
                  </Form>
                </Formik>

                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                  Don't have an account?{" "}
                  <Link href="/registration" style={{ color: "#393f81" }}>
                    Register here
                  </Link>
                </p>

                <div className="d-flex flex-row justify-content-start"></div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default LoginForm;
