"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { contactValidation } from "../validations/contact";
import { toast } from "react-toastify";

const Contact_form = () => {
 const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      subject: "",
      message: "",
    },
    validationSchema: contactValidation,
    onSubmit: async (values, { resetForm }) => {
      try {
         setLoading(true);
        const res = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/contact-us/save`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Basic ${process.env.NEXT_PUBLIC_BASIC_AUTH}`,
            },
            body: JSON.stringify(values),
          },
        );
        const data = await res.json();
     
       
        if (data.success) {
          toast.success(data.message);
          resetForm();
        } else {
          toast.error(data.message || "Something went wrong");
        }
      } catch (error) {
        toast.error("Server error, please try again");
      } finally {
    setLoading(false); // ✅ MUST
  }
    },
  });

  // ✅ Auto format phone number as (123) 456-7890
  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, ""); // remove non-digit
    if (input.length > 10) input = input.slice(0, 10);

    let formatted = "";
    if (input.length > 0) formatted += "(" + input.substring(0, 3);
    if (input.length >= 4) formatted += ") " + input.substring(3, 6);
    if (input.length >= 7) formatted += "-" + input.substring(6, 10);

    formik.setFieldValue("phoneNumber", formatted);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        {/* First + Last Name */}
        <div className="single-input-field">
          <div className="details">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="Your First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <small className="error">{formik.errors.firstName}</small>
              )}
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Your Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.lastName && formik.errors.lastName && (
                <small className="error">{formik.errors.lastName}</small>
              )}
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="single-input-field">
          <input
            type="email"
            name="emailAddress"
            placeholder="E-mail"
            value={formik.values.emailAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.emailAddress && formik.errors.emailAddress && (
            <small className="error">{formik.errors.emailAddress}</small>
          )}
        </div>

        {/* Phone with mask */}
        <div className="single-input-field">
          <input
            type="text"
            name="phoneNumber"
            placeholder="(123) 456-7890"
            value={formik.values.phoneNumber}
            onChange={handlePhoneChange}
            onBlur={formik.handleBlur}
            maxLength={14} // (123) 456-7890 = 14 chars
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <small className="error">{formik.errors.phoneNumber}</small>
          )}
        </div>

        {/* Subject */}
        <div className="single-input-field">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.subject && formik.errors.subject && (
            <small className="error">{formik.errors.subject}</small>
          )}
        </div>

        {/* Message */}
        <div className="single-input-field">
          <textarea
            name="message"
            placeholder="Write Your Message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.message && formik.errors.message && (
            <small className="error">{formik.errors.message}</small>
          )}
        </div>

        <button type="submit" className="c-btn desktop-btn">
       {loading ? "Sending message..." : "Send Now"}
        </button>
      </div>
    </form>
  );
};

export default Contact_form;
