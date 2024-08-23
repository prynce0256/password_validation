const passwordInput = document.querySelector('.pass-field input');
const eyeIcon = document.querySelector('.pass-field i');
const requirement = document.querySelectorAll('.requirement li');

// Array of password requirements with corresponding regular expressions and
// index of the requirements
const requirements = [
    {regex: /.{8}/, index: 0}, // Minimum of 8 characters
    {regex: /[0-9]/, index: 1}, // At least one number
    {regex: /[A-Z]/, index: 2}, // At least one uppercase letter
    {regex: /[a-z]/, index: 3}, // At least one lowercase letter
    {regex: /[^A-Za-z0-9]/, index: 4}, // At least one special character
]

passwordInput.addEventListener("keyup", (e) =>{
    requirements.forEach(item => {
        // check if the password matches the requirements
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirement[item.index];

        // updating class and icons of the requirement item if password is valid
        if(isValid){
            requirementItem.classList.add("valid");
            requirementItem.firstElementChild.className = "ri-check-fill";
        }else{
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "ri-circle-fill";
        }
    });
});

// Show or hide the password
eyeIcon.addEventListener("click", () => {
    // toggle the  password input type between "Password" and "Text"
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    // Updating the eye icon class based on the password input type
    eyeIcon.className = `ri-eye${passwordInput.type === "password" ? "" : "-off"}-line`
})