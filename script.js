
const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const studentName = document.getElementById("studentName").value;
    const studentId = document.getElementById("studentId").value;
    const eventName = document.getElementById("eventName").value;

    const message = document.getElementById("message");

    message.textContent =
        "Thank you, " + studentName +
        "! You have successfully registered for " +
        eventName + ". Student ID: " + studentId;

    message.style.color = "green";

    registrationForm.reset();
});
