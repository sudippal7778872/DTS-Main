import React from "react";
import {
    Stack,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import { useEffect } from "react";
import axios from "axios"


const initialValues = {
    Title: "",
    FirstName: "",
    MiddleLast: "",
    LastName: "",
    Department: "",
    Designation: "",
    Supervisor: "",
    DateOfJoining: "",
    Email: "",
    Cell: "",
};

const CareerForm = () => {
    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const validationSchema = Yup.object().shape({
        Title: Yup.string().required("Title is required"),
        FirstName: Yup.string().required("FirstName is required"),
        // MiddleLast: Yup.string().required("MiddleLast Type is required"),
        LastName: Yup.string().required("LastName is required"),
        Department: Yup.string().required("Department is required"),
        Designation: Yup.string().required("Designation Type is required"),
        Supervisor: Yup.string().required("Supervisor time is required"),
        DateOfJoining: Yup.string().required("Date Of Joining  id is required").nullable(),
        Email: Yup.string().required("Email Id is required"),
        Cell: Yup.string().required("Cell Id is required"),
    });

    const onSubmit = async (values, action) => {
        console.log("form submitted");
        console.log("action", action);
        console.log("value", values);
        const response = await axios.post("http://localhost:8000/career",values)
        if(response.status === 202){
            return alert("email is already exists")
        }
        if(response){
            alert("data saved successfully")
        }
        
    }
    const handleReset = (resetForm) => {
        resetForm();
    };
    const handleCloseSnackbar = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenSnackbar(false);
    };
    return (
        <>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
            >
            </Snackbar>
            <Stack
                style={{
                    // border: "2px solid red",
                    margin: "3rem 5rem",
                    justifyContent: "center",
                    display: "flex",
                }}
            >
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {(props) => (
                        <Form>
                            <Stack direction="column" spacing={2}>
                                <Stack direction="row" spacing={1}>
                                    <FormControl fullWidth sx={{ minWidth: 150 }}>
                                        <InputLabel id="demo-simple-select-label">
                                            Title
                                        </InputLabel>
                                        <Field
                                            as={Select}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={props.values.Title}
                                            error={
                                                props.errors.Title && props.touched.Title
                                            }
                                            label="Title"
                                            name="Title"
                                        >
                                            <MenuItem value={"Mr"}>
                                                Mr.
                                            </MenuItem>
                                            <MenuItem value={"Mrs."}>
                                                Mrs.
                                            </MenuItem>
                                        </Field>
                                    </FormControl>
                                    <div style={{ color: "red" }}>
                                        <ErrorMessage name="Title" />
                                    </div>

                                    <Field
                                        as={TextField}
                                        name="FirstName"
                                        placeholder="FirstName"
                                        value={props.values.FirstName}
                                        error={props.errors.FirstName && props.touched.FirstName}
                                        fullWidth
                                        label="FirstName"
                                    // onChange={handleChangeName}
                                    />
                                    <div style={{ color: "red" }}>
                                        <ErrorMessage name="FirstName" />
                                    </div>

                                    <Field
                                        as={TextField}
                                        name="MiddleName"
                                        placeholder="MiddleName"
                                        value={props.values.MiddleName}
                                        error={props.errors.MiddleName && props.touched.MiddleName}
                                        fullWidth
                                        label="MiddleName"
                                    // onChange={handleChangeName}
                                    />
                                    <div style={{ color: "red" }}>
                                        <ErrorMessage name="MiddleName" />
                                    </div>

                                    <Field
                                        as={TextField}
                                        name="LastName"
                                        placeholder="LastName"
                                        value={props.values.LastName}
                                        error={props.errors.LastName && props.touched.LastName}
                                        fullWidth
                                        label="LastName"
                                    // onChange={handleChangeName}
                                    />
                                    <div style={{ color: "red" }}>
                                        <ErrorMessage name="LastName" />
                                    </div>
                                </Stack>

                                <Stack direction={"row"} spacing={3}>
                                    <FormControl fullWidth sx={{ minWidth: 150 }}>
                                        <InputLabel id="demo-simple-select-label">
                                            Department
                                        </InputLabel>
                                        <Field
                                            as={Select}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={props.values.Department}
                                            error={
                                                props.errors.Department && props.touched.Department
                                            }
                                            label="Department"
                                            name="Department"
                                        >
                                            <MenuItem value={"WebDevelopemnt"}>
                                                Web Developemnt
                                            </MenuItem>
                                            <MenuItem value={"ReactDeveloper"}>
                                                React Developer
                                            </MenuItem>
                                            <MenuItem value={"NodeDeveloper"}>
                                                Node Developer
                                            </MenuItem>
                                        </Field>
                                    </FormControl>
                                    <div style={{ color: "red" }}>
                                        <ErrorMessage name="Department" />
                                    </div>

                                    <FormControl fullWidth sx={{ minWidth: 150 }}>
                                        <InputLabel id="demo-simple-select-label">
                                            Designation
                                        </InputLabel>
                                        <Field
                                            as={Select}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={props.values.Designation}
                                            error={
                                                props.errors.Designation && props.touched.Designation
                                            }
                                            label="Designation"
                                            name="Designation"
                                        >
                                            <MenuItem value={"associate"}>
                                                Associate
                                            </MenuItem>
                                            <MenuItem value={"junior"}>
                                                Junior
                                            </MenuItem>
                                            <MenuItem value={"senior"}>
                                                Senior
                                            </MenuItem>
                                        </Field>
                                    </FormControl>
                                    <div style={{ color: "red" }}>
                                        <ErrorMessage name="Designation" />
                                    </div>
                                </Stack>

                                <Stack direction={"row"} spacing={3}>
                                    <FormControl fullWidth sx={{ minWidth: 150 }}>
                                        <InputLabel id="demo-simple-select-label">
                                            Supervisor
                                        </InputLabel>
                                        <Field
                                            as={Select}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={props.values.Supervisor}
                                            error={
                                                props.errors.Supervisor &&
                                                props.touched.Supervisor
                                            }
                                            label="Maintenance Type"
                                            name="Supervisor"
                                        >
                                            <MenuItem value={"autocratic"}>Autocratic</MenuItem>
                                            <MenuItem value={"bureaucratic "}>Bureaucratic</MenuItem>
                                        </Field>
                                    </FormControl>
                                    <div style={{ color: "red" }}>
                                        <ErrorMessage name="Supervisor" />
                                    </div>

                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Field
                                            as={DatePicker}
                                            disableToolbar
                                            renderInput={(props) => (
                                                <TextField
                                                    {...props}
                                                    size="medium"
                                                    required
                                                    fullWidth
                                                />
                                            )}
                                            label="Date Of Joining"
                                            name="DateOfJoining"
                                            autoOk={true}
                                            required
                                            minDateTime={new Date()}
                                            value={props.values.DateOfJoining}
                                            error={props.errors.DateOfJoining && props.touched.DateOfJoining}
                                            onChange={(val) => {
                                                props.setFieldValue("DateOfJoining", val);
                                            }}
                                        />
                                    </LocalizationProvider>
                                    <div style={{ color: "red" }}>
                                        <ErrorMessage name="DateOfJoining" />
                                    </div>
                                </Stack>

                                <Stack direction={"row"}>
                                    <Field
                                        as={TextField}
                                        name="Email"
                                        placeholder="Email"
                                        value={props.values.Email}
                                        error={props.errors.Email && props.touched.Email}
                                        fullWidth
                                        label="Email"
                                    // onChange={handleChangeName}
                                    />
                                    <div style={{ color: "red" }}>
                                        <ErrorMessage name="Email" />
                                    </div>
                                </Stack>
                                <Stack direction={"row"}>

                                    <Field
                                        as={TextField}
                                        name="Cell"
                                        placeholder="Cell"
                                        value={props.values.Cell}
                                        error={props.errors.Cell && props.touched.Cell}
                                        fullWidth
                                        label="Cell"
                                    // onChange={handleChangeName}
                                    />
                                    <div style={{ color: "red" }}>
                                        <ErrorMessage name="Cell" />
                                    </div>
                                </Stack>




                            </Stack>

                            <Stack
                                spacing={3}
                                direction="row"
                                mt={7}
                                style={{ display: "flex", justifyContent: "center" }}
                            >
                                <Button type="submit" variant="contained">
                                    Submit
                                </Button>
                                <Button
                                    value={"Reset"}
                                    style={{ backgroundColor: "grey", color: "white" }}
                                    onClick={handleReset.bind(null, props.resetForm)}
                                    type="button"
                                >
                                    Clear All
                                </Button>
                            </Stack>
                        </Form>
                    )}
                </Formik>
            </Stack>
        </>
    )
}

export default CareerForm