$(document).ready(function () {

  // 1. HERO BUTTON: change the background color randomly
  $("#changeColorBtn").on("click", function () {
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    $("body").css("background", randomColor);
  });


  // 2. IMAGE GALLERY: open clicked image in a modal
  $(".gallery-image").on("click", function () {
    const imageSource = $(this).attr("src");
    const imageAlt = $(this).attr("alt");

    $("#modalImage").attr("src", imageSource);
    $("#modalImage").attr("alt", imageAlt);

    $("#imageModal").addClass("open");
  });


  // Close modal with the X button
  $("#closeModal").on("click", function () {
    $("#imageModal").removeClass("open");
  });


  // Close modal when clicking the dark background
  $("#imageModal").on("click", function (event) {
    if (event.target === this) {
      $("#imageModal").removeClass("open");
    }
  });


  // Close modal with Escape key
  $(document).on("keydown", function (event) {
    if (event.key === "Escape") {
      $("#imageModal").removeClass("open");
    }
  });


  // 3. CONTACT FORM VALIDATION
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let formIsValid = true;

    // Clear previous errors
    $(".error-message").text("");
    $("input, textarea").removeClass("input-error");


    // Validate name
    if (name === "") {
      $("#nameError").text("Please enter your name.");
      $("#name").addClass("input-error");
      formIsValid = false;
    }


    // Validate email
    if (email === "") {
      $("#emailError").text("Please enter your email address.");
      $("#email").addClass("input-error");
      formIsValid = false;

    } else if (!emailPattern.test(email)) {
      $("#emailError").text("Please enter a valid email address.");
      $("#email").addClass("input-error");
      formIsValid = false;
    }


    // Validate message
    if (message === "") {
      $("#messageError").text("Please enter a message.");
      $("#message").addClass("input-error");
      formIsValid = false;
    }


    // Successful submission
    if (formIsValid) {
      alert("Form submitted successfully!");
      this.reset();
    }
  });

});