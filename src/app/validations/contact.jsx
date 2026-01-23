import * as Yup from "yup";

export const contactValidation = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),

  emailAddress: Yup.string()
    .required("Email is required")
    .test(
      "is-valid-email",
      "Please enter a valid email (example: name@gmail.com)",
      (value) => {
        if (!value) return false;
        const emailRegex =
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(value);
      }
    ),

  phoneNumber: Yup.string()
    .required("Phone is required")
    .matches(
      /^\(\d{3}\)\s\d{3}-\d{4}$/,
      "Phone number must be in the format (123) 456-7890"
    ),

  subject: Yup.string().required("Subject is required"),

  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});
