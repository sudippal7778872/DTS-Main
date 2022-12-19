import React from 'react'
import {
    TextField,
    Checkbox,
} from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"
import Axios from "axios"

const Signup = () => {
    const initialValues = {
        firstname: "",
        email: "",
        phone: null,
        work: "",
        password: "",
        cpassword: "",
    }

    const validationSchema = Yup.object().shape({
        firstname: Yup.string().max(50).required("name is require"),
        email: Yup.string().email("email is not valid").required("email is required"),
        phone: Yup.number().min(10).required("phone is required"),
        work: Yup.string().max(256).required("work is required"),
        password: Yup.string().min(8).max(30).required("password is required"),
        cpassword: Yup.string().min(8).max(30).required("cpassword is required"),
    })

    const onSubmit = async (values, action) => {
        console.log("form submitted",values);
        const response = await Axios.post("http://localhost:8000/register",values)
        if(response.status === 200){
            alert("user successsfully Register")
        }else if(response.status === 201){
            console.log(response)
            alert(response.data.error)
        }
    }

    return (
        <div>
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                            <Formik
                                                initialValues={initialValues}
                                                validationSchema={validationSchema}
                                                onSubmit={onSubmit}
                                            >
                                                {(props) => (

                                                    <Form className="mx-1 mx-md-4">

                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                {/* <input type="text" id="form3Example1c" className="form-control" />
                                                                <label className="form-label" htmlFor="form3Example1c">Your Name</label> */}
                                                                <Field
                                                                    as={TextField}
                                                                    name="firstname"
                                                                    label="First Name"
                                                                    placeholder="Please Enter Your name"
                                                                    values={props.values.firstname}
                                                                    error={props.errors.firstname && props.touched.firstname}
                                                                    fullWidth
                                                                />
                                                            </div>
                                                        </div>
                                                        <div style={{color:"red"}}>
                                                            <ErrorMessage name='firstname'/>
                                                        </div>

                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                {/* <input type="email" id="form3Example3c" className="form-control" />
                                                                <label className="form-label" htmlFor="form3Example3c">Your Email</label> */}
                                                                <Field
                                                                    as={TextField}
                                                                    name="email"
                                                                    label="Email"
                                                                    placeholder="Please Enter your email"
                                                                    value={props.values.email}
                                                                    error={props.errors.email && props.touched.email}
                                                                    fullWidth
                                                                />
                                                            </div>
                                                        </div>
                                                        <div style={{color:"red"}}>
                                                            <ErrorMessage name="email"/>
                                                        </div>

                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                {/* <input type="password" id="form3Example4c" className="form-control" />
                                                                <label className="form-label" htmlFor="form3Example4c">Password</label> */}
                                                                <Field
                                                                    as={TextField}
                                                                    name="phone"
                                                                    label="Phone Number"
                                                                    placeholder="Please Enter Your Phone Number"
                                                                    value={props.values.phone}
                                                                    error={props.errors.phone && props.touched.phone}
                                                                    fullWidth
                                                                />
                                                            </div>
                                                        </div>
                                                        <div style={{color:"red"}}>
                                                            <ErrorMessage name='phone'/>
                                                        </div>

                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                {/* <input type="password" id="form3Example4cd" className="form-control" />
                                                                <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label> */}
                                                                <Field
                                                                    as={TextField}
                                                                    name="work"
                                                                    label="Work description"
                                                                    placeholder="please Enter you work"
                                                                    value={props.values.work}
                                                                    error={props.errors.work && props.touched.work}
                                                                    fullWidth
                                                                />
                                                            </div>
                                                        </div>
                                                        <div style={{color:"red"}}>
                                                            <ErrorMessage name='work'/>
                                                        </div>

                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                {/* <input type="password" id="form3Example4c" className="form-control" />
                                                                <label className="form-label" htmlFor="form3Example4c">Password</label> */}
                                                                <Field
                                                                    as={TextField}
                                                                    name="password"
                                                                    label="password"
                                                                    placeholder="Please Enter Your Password"
                                                                    value={props.values.password}
                                                                    error={props.errors.password && props.touched.password}
                                                                    fullWidth
                                                                />
                                                            </div>
                                                        </div>
                                                        <div style={{color:"red"}}>
                                                            <ErrorMessage name='password'/>
                                                        </div>

                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                            <div className="form-outline flex-fill mb-0">
                                                                {/* <input type="password" id="form3Example4c" className="form-control" />
                                                                <label className="form-label" htmlFor="form3Example4c">Password</label> */}
                                                                <Field
                                                                    as={TextField}
                                                                    name="cpassword"
                                                                    label="Confirm password"
                                                                    placeholder="Confirm Password"
                                                                    value={props.values.cpassword}
                                                                    error={props.errors.cpassword && props.touched.cpassword}
                                                                    fullWidth
                                                                />
                                                            </div>
                                                        </div>
                                                        <div style={{color:"red"}}>
                                                            <ErrorMessage name='cpassword'/>
                                                        </div>

                                                        <div className="d-flex justify-content-around align-items-center mb-4">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                                                <label className="form-check-label" htmlFor="form2Example3">
                                                                    I agree all statements in <a href="#!">Terms of service</a>
                                                                </label>                                                    </div>
                                                        </div>

                                                        {/* <div className="form-check d-flex justify-content-center mb-5">
    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
    <label className="form-check-label" htmlFor="form2Example3">
        I agree all statements in <a href="#!">Terms of service</a>
    </label>
</div> */}

                                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                            <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                                        </div>

                                                    </Form>
                                                )}
                                            </Formik>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup