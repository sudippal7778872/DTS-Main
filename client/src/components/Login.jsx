import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Field, Form, Formik, ErrorMessage } from "formik"
import * as Yup from "yup";
import {
    TextField,
    Checkbox,
} from "@mui/material";
import Axios from "axios"
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const initialvalues = {
        email: "",
        password: "",
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("email is not valid").max(255).required("email is required"),
        password: Yup.string().min(8).max(30).required('Password is required')
    })
    const onSubmit = async (values, action) => {
        console.log("form submitted");
        console.log("value is ",values)
        const response = await Axios.post("http://localhost:8000/login",values)
        if(response.status === 200){
            alert("user login successfully")
            navigate("/")
        }else if(response.status === 201){
            alert("Wrong username and Password");
        }
    }

    return (
        <div>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="img-fluid" alt="Phone" />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <Formik
                                initialValues={initialvalues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                            >
                                {(props) => (
                                    <Form>
                                        <div className="form-outline mb-4">
                                            {/* <input type="email" id="form1Example13" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form1Example13">Email address</label> */}
                                            <Field
                                                as={TextField}
                                                label="Email Address"
                                                name="email"
                                                fullWidth
                                                placeholder="please enter your email address"
                                                value={props.values.email}
                                                error={props.errors.email && props.touched.email}

                                            />
                                            <div style={{ color: "red" }}>
                                                <ErrorMessage name='email' />
                                            </div>
                                        </div>

                                        <div className="form-outline mb-4">
                                            {/* <input type="password" id="form1Example23" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form1Example23">Password</label> */}
                                            <Field
                                                as={TextField}
                                                label="Password"
                                                name="password"
                                                type="password"
                                                fullWidth
                                                placeholder="please enter your password"
                                                value={props.values.password}
                                                error={props.errors.password && props.touched.password}

                                            />
                                            <div style={{ color: "red" }}>
                                                <ErrorMessage name='password' />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-around align-items-center mb-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                                <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                                            </div>
                                            <a href="#!">Forgot password?</a>
                                        </div>


                                        <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>

                                        <div className="divider d-flex align-items-center my-4">
                                            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                        </div>

                                        <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: "#3b5998" }} href="#!"
                                            role="button">
                                            <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
                                        </a>
                                        <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: "#55acee" }} href="#!"
                                            role="button">
                                            <i className="fab fa-twitter me-2"></i>Continue with Twitter</a>

                                    </Form>
                                )}

                            </Formik>





                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Login