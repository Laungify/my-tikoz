const validateRegistatiion = (values) => {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = "Required";
  }
  // else if (values.firstname.length > 15) {
  //   errors.firstname = "Must be 15 characters or less";
  // }

  if (!values.secondname) {
    errors.secondname = "Required";
  }
  // else if (values.secondname.length > 20) {
  //   errors.secondname = "Must be 20 characters or less";
  // }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  } else if (!/\d/.test(values.password)) {
    errors.password = "Password must contain at least one number";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = "Password must contain at least one capital letter";
  } else if (!/[!@#$%^&*]/.test(values.password)) {
    errors.password =
      "Password must contain at least one special character (!@#$%^&*)";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }
  if (!values.phone) {
    errors.phone = "Required";
  }
  // else {
  //   const countryCode = values.phone.substring(0, 2);
  //   const numericPart = values.phone.substring(2);

  //   if (countryCode !== "+254") {
  //     // replace +1 with the country code you're validating for
  //     errors.phone = "Invalid country code";
  //   } else if (!/^\d+$/.test(numericPart)) {
  //     errors.phone = "Must be a numeric value";
  //   } else if (numericPart.length !== 10) {
  //     // replace 10 with the expected phone number length for the country
  //     errors.phone = `Must be ${countryCode} followed by ${numericPart.length} digits`;
  //   }
  // }

  return errors;
};
export default validateRegistatiion;
