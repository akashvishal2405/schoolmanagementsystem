import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AdminSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from "../styles/AdminSignInStyles";
import { emailValidator, passwordValidator } from "./FormValid";

const AdminSigin = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessge, setErrorMessage] = useState("");

  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (!emailValidator(formData.email))
      return setErrorMessage("Please enter valid email id");

    if (!passwordValidator(formData.password))
      return setErrorMessage("Password should have munimum 8 characters");

    errorMessge.length === 0 ? navigate("/admin/dashboard") : "error"
  };

  return (
    <>
      <AdminSignInContainer>
        <h2>Admin Sign In</h2>
        <FormContainer>
          {errorMessge.length > 0 && (
            <span style={{ color: "red" }}>{errorMessge}</span>
          )}
          <InputField
            type="email"
            placeholder="Email"
            onChange={handleForm}
            name="email"
            required
          />
          <InputField
            type="password"
            placeholder="Password"
            onChange={handleForm}
            name="password"
            required
          />
          <SubmitButton type="button" onClick={formSubmit}>
            Sign In
          </SubmitButton>
        </FormContainer>
      </AdminSignInContainer>
    </>
  );
};

export default AdminSigin;
