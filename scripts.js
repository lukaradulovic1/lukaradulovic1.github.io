function showPhoneNumber() {
  let phoneNumber = "+381 64 48 27 488";
  let phoneButton = document.getElementById("phone");
  console.log("phone");
  phoneButton.addEventListener("click", function () {
    this.innerHTML = phoneNumber;
  });
}

function showEmail() {
  let emailAddress = "luka.radulovic.011@gmail.com";
  let emailButton = document.getElementById("email");

  emailButton.addEventListener("click", function (e) {
    this.innerHTML = emailAddress;
  });
}
