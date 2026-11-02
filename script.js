
const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const studentName = document.getElementById("studentName").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const eventName = document.getElementById("eventName").value;

    const message = document.getElementById("message");

    if (studentName === "" || studentId === "" || eventName === "") {
        message.textContent = "Please fill in all fields!";
        message.style.color = "red";
        return;
    }

    if (studentId !== "2403A54042") {
        message.textContent = "Please enter your correct student ID!";
        message.style.color = "red";
        return;
    }

    message.textContent =
        "Registration Successful! Welcome " + studentName +
        ". You registered for " + eventName + ".";

    message.style.color = "green";

    registrationForm.reset();
});
