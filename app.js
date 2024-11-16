let usernameData = false;
      let emailData = false;
      let ageData = false;

      const usersData = [
        { username: "Arbaz khan", email: "arbazkn45257@gmail.com", age: 30 },
        { username: "Unaid king", email: "unaidking@.com", age: 25 },
      ];

      function inputValid(e) {
        const value = e.target.value.trim();
        if (value.length < 3) {
          e.target.nextElementSibling.innerText = "At least 3 characters required";
          e.target.nextElementSibling.style.display = "block";
          usernameData = false;
        } else {
          e.target.nextElementSibling.style.display = "none";
          usernameData = true;
        }
      }

      function emailValid(e) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const email = e.target.value.trim();
        if (!emailPattern.test(email)) {
          e.target.nextElementSibling.innerText = "Enter a valid email";
          e.target.nextElementSibling.style.display = "block";
          emailData = false;
        } else {
          e.target.nextElementSibling.style.display = "none";
          emailData = true;
        }
      }

      function ageValid(e) {
        const age = parseInt(e.target.value, 10);
        if (age < 18 || age > 100 || isNaN(age)) {
          e.target.nextElementSibling.innerText = "Age must be between 18 and 100";
          e.target.nextElementSibling.style.display = "block";
          ageData = false;
        } else {
          e.target.nextElementSibling.style.display = "none";
          ageData = true;
        }
      }

      function submitData(e) {
  e.preventDefault(); // Default behavior ko rokna
  
  const username = document.getElementById("username").value.trim();
  const age = parseInt(document.getElementById("age").value.trim(), 10);
  const email = document.getElementById("email").value.trim();

  if (!usernameData) {
    document.getElementById("username").focus();
    document.getElementById("username").nextElementSibling.style.display = "block";
    document.getElementById("username").nextElementSibling.innerText = "At least 3 characters required";
    return;
  }

  if (!emailData) {
    document.getElementById("email").focus();
    document.getElementById("email").nextElementSibling.style.display = "block";
    document.getElementById("email").nextElementSibling.innerText = "Enter a valid email";
    return;
  }

  if (!ageData) {
    document.getElementById("age").focus();
    document.getElementById("age").nextElementSibling.style.display = "block";
    document.getElementById("age").nextElementSibling.innerText = "Age must be between 18 and 100";
    return;
  }

  // Add new user data
  usersData.push({ username, email, age });
  console.log("User data added:", usersData);

  // Reset form and flags
  document.querySelector("form").reset();
  usernameData = false;
  emailData = false;
  ageData = false;

  // Display Sweet Alert
  Swal.fire({
    title: "Success!",
    text: "Account created successfully!",
    icon: "success",
    confirmButtonText: "OK",
  });
}
