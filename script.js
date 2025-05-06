function validateForm() {
  let valid = true;

  // Validate Full Name
  const name = document.getElementById("fullname").value;
  if (name.trim() === "") {
    document.getElementById("nameError").textContent = "Full name is required.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Validate Email
  const email = document.getElementById("email").value;
  const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent =
      "Enter a valid email address.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Validate Phone Number
  const phone = document.getElementById("phone").value;
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phone)) {
    document.getElementById("phoneError").textContent =
      "Enter a valid 10-digit phone number.";
    valid = false;
  } else {
    document.getElementById("phoneError").textContent = "";
  }

  // Validate Password
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Validate Confirm Password
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (confirmPassword !== password) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match.";
    valid = false;
  } else {
    document.getElementById("confirmPasswordError").textContent = "";
  }

  return valid;
}
