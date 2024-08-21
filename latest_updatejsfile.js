function nameValidation() {
    const nameInput = document.getElementById('fullName'); // Reference to full name input
    const nameError = document.getElementById('nameErrorMessage'); // Reference to full name error message
    const namePattern = /^[A-Za-z\s]{3,}$/; // Pattern for full name validation
    const fullNameValue = nameInput.value.trim(); // Trim whitespace from input value
    // Clear previous error message and styling
    nameError.style.display = 'none';
    nameError.textContent = '';
    nameInput.classList.remove('inputError', 'inputValid');
    // Check if input is empty
    if (fullNameValue === '') {
        nameError.textContent = 'Please enter your full name';
        nameError.style.display = 'block'; // Show the error message
        nameInput.classList.add('inputError'); // Add error styling
        setError(nameInput,"Please enter your full name");
    } 
    // Validate the full name format
    else if (!namePattern.test(fullNameValue)) {
        nameError.textContent = 'Contain at least 3 characters and only letters and spaces';
        nameError.style.display = 'block'; // Show the error message
        nameInput.classList.add('inputError'); // Add error styling
        setError(nameInput,"Contain at least 3 characters and only letters and spaces");
    } 
    // If valid
    else {
        nameInput.classList.add('inputValid'); // Add valid styling
        setSuccess(nameInput);
    }
}
function setMaxDate() {
    // Get today's date
    var todayDate = new Date();
    var month = todayDate.getMonth() + 1; // Months are zero-based, so add 1
    var year = todayDate.getFullYear(); // Use getFullYear() for four-digit year
    var tdate = todayDate.getDate(); // Get the day of the month
    // Format month and date with leading zeros if needed
    if (month < 10) {
        month = "0" + month;
    }
    if (tdate < 10) {
        tdate = "0" + tdate;
    }
    // Create the maxDate string in YYYY-MM-DD format
    var maxDate = year + "-" + month + "-" + tdate;
    // Log maxDate to the console to verify it
    console.log(maxDate);
    // Set this as the max attribute for the date input
    document.getElementById('dateOfBirth').setAttribute('max', maxDate);
}
//date of birth validation
function dateOfBirthValidation() {
    const dateOfBirthInput = document.getElementById('dateOfBirth');
    const dateOfBirthError = document.getElementById('dateErrorMessage');
    const ageMessage = document.getElementById('ageMessage');
    // Get the current date and the selected date
    const today = new Date();
    const selectedDate = new Date(dateOfBirthInput.value);
    // Clear previous error messages and styling
    dateOfBirthError.style.display = 'none';
    dateOfBirthError.textContent = '';
    dateOfBirthError.textContent = '';
    dateOfBirthInput.classList.remove('inputError','inputValid');
    // Check for a valid date
    // Calculate age
    let age = today.getFullYear() - selectedDate.getFullYear();
    const monthDifference = today.getMonth() - selectedDate.getMonth();
    // Adjust age if the birth date hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < selectedDate.getDate())) {
        age--;
    }
    // Check if the date is in the future
    if (selectedDate > today) {
        dateOfBirthError.textContent = 'Date cannot be in the future';
        dateOfBirthError.style.display = 'block';
        dateOfBirthInput.classList.add('inputError');
        setError(dateOfBirthInput, "Date cannot be in the future");
    } 
    // Check if the user is at least 18 years old
    else if (age < 18) {
        dateOfBirthError.textContent = 'You must be at least 18 years old';
        dateOfBirthError.style.display = 'block';
        dateOfBirthInput.classList.add('inputError');
        setError(dateOfBirthInput, "You must be at least 18 years old");
    }
    else if (isNaN(selectedDate.getTime())) {
        dateOfBirthError.textContent = 'Please select a valid date';
        dateOfBirthError.style.display = 'block';
        dateOfBirthInput.classList.add('inputError');
        setError(dateOfBirthInput, "Please select a valid date");
    }
    else {
        dateOfBirthInput.classList.add('inputValid');
        dateOfBirthError.textContent = `Your age is: ${age} years`;
        setSuccess(dateOfBirthInput);
    }
}
//phone number valludatio
function phoneNumberValidation() {
    const phoneNumberInput=document.getElementById('phoneNumber');
    const error=document.getElementById('phoneNumberErrorMessage');
    const phoneNumberPattern=/^[6789]\d{9}$/;
    // Clear the error message when the user focuses on the input
    error.style.display='none';
    error.textContent='';
    phoneNumberInput.classList.remove('inputError', 'inputValid');
    if (phoneNumberInput.value && !phoneNumberPattern.test(phoneNumberInput.value)) {
        error.textContent='Invalid phone number format';
        error.style.display='block';//will start on a new line and stretch to fill the container's width.
        phoneNumberInput.classList.add('inputError');
        setError(phoneNumberInput,"Invalid phone number format");
    }
    else if (phoneNumberInput.value) {
        phoneNumberInput.classList.add('inputValid');
        setSuccess(phoneNumberInput);
    }
    else if(phoneNumberInput.value===""){
        error.textContent='Please enter phone number';
        error.style.display='block';//will start on a new line and stretch to fill the container's width.
        phoneNumberInput.classList.add('inputError');
        setError(phoneNumberInput,"please enter phone number");
    }
}
function genderValidation() {
    const genderError = document.getElementById("genderErrorMessage"); // Specify the correct ID for the payment error element
    const maleRadio = document.getElementById("male");
    const femaleRadio = document.getElementById("female");
    // Check if no payment method is selected
    if (!maleRadio.checked && !femaleRadio.checked) {
        genderError.innerText = "Please select a gender.";
        genderError.style.display = "block";
    } else {
        genderError.style.display = "none";
         // Hide the error message if a payment method is selected
    }
}
//mail validation
function emailValidation() {
    const emailInput=document.getElementById('email');
    const emailError=document.getElementById('emailErrorMessage');
    const emailPattern=/^[a-zA-Z0-9._%+-]+@(gmail.com|yahoo.com|outlook.com)$/;
    // Clear the error message when the user focuses on the input
    emailError.style.display='none';
    emailError.textContent='';
    emailInput.classList.remove('inputError', 'inputValid');
    if (emailInput.value && !emailPattern.test(emailInput.value)) {
        emailError.textContent='Invalid email format';
        emailError.style.display='block';//will start on a new line and stretch to fill the container's width.
        emailInput.classList.add('inputError');
        setError(emailInput,"Invalid email format");
    }
    else if (emailInput.value) {
        emailInput.classList.add('inputValid');
        setSuccess(emailInput);
    }
    else if(emailInput.value===""){
        emailError.textContent='Please enter mail id';
        emailError.style.display='block';//will start on a new line and stretch to fill the container's width.
        emailInput.classList.add('inputError');
        setError(emailInput,"Please enter email");
    }
}
//media
function mediaValidation() {
    const mediaError = document.getElementById("mediaErrorMessage"); // Specify the correct ID for the payment error element
    const facebookRadio = document.getElementById("facebook");
    const youtubeRadio = document.getElementById("youtube");
    const instagramRadio = document.getElementById("instagram");
    const twitterRadio = document.getElementById("twitter");
    const otherRadio = document.getElementById("other");
    // Check if no payment method is selected
    if (!facebookRadio.checked && !youtubeRadio.checked && !instagramRadio.checked && !twitterRadio.checked && !otherRadio.checked) {
        mediaError.innerText = "Please select a media.";
        mediaError.style.display = "block";
    } else {
        mediaError.style.display = "none"; // Hide the error message if a payment method is selected
    }
}
//number of tickets
function numberOfTicketValidation() {
    const numberOfTicketInput=document.getElementById('numberOfTicket');
    const numberOfTicketError=document.getElementById('numberOfTicketErrorMessage');
    const numberOfTicketPattern=/^[1-9]\d*$/;
    // Clear the error message when the user focuses on the input
    const ticketNumber = parseInt(numberOfTicketInput.value, 10);//convert string into number
    numberOfTicketError.style.display='none';
    numberOfTicketError.textContent='';
    numberOfTicketInput.classList.remove('inputError', 'inputValid');
    if (numberOfTicketInput.value && !numberOfTicketPattern.test(numberOfTicketInput.value) || ticketNumber > 12) {
        numberOfTicketError.textContent='Invalid format or maximum number of tickets can purchase is 12';
        numberOfTicketError.style.display='block';//will start on a new line and stretch to fill the container's width.
        numberOfTicketInput.classList.add('inputError');
        setError(numberOfTicketInput,"Invalid format or maximum number of tickets can purchase is 12");
    }
    else if (numberOfTicketInput.value) {
        numberOfTicketInput.classList.add('inputValid');
        setSuccess(numberOfTicketInput);
    }
    else if(numberOfTicketInput.value===""){
        numberOfTicketError.textContent='Please enter number of tickets';
        numberOfTicketError.style.display='block';//will start on a new line and stretch to fill the container's width.
        numberOfTicketInput.classList.add('inputError');
        setError(numberOfTicketInput,"Please enter number of tickets");
    }
}
function checkPayment() {
    const paymentError = document.getElementById("paymentErrorMessage"); // Specify the correct ID for the payment error element
    const creditCardRadio = document.getElementById("creditCard");
    const debitCardRadio = document.getElementById("debitCard");
    const cashRadio = document.getElementById("cash");
    const checkRadio = document.getElementById("check");
    // Check if no payment method is selected
    if (!creditCardRadio.checked && !debitCardRadio.checked && !cashRadio.checked && !checkRadio.checked) {
        paymentError.innerText = "Please select a payment method.";
        paymentError.style.display = "block";
    } else {
        paymentError.style.display = "none"; // Hide the error message if a payment method is selected
    }
}
// Error handling and submit button validation
function setError(input, message) {
    const formControl = input.parentElement; // Get the parent element of the input field
    let small = formControl.querySelector("small"); // Find the <small> element
    // Create a <small> element if it doesn't exist
    if (!small) {
        small = document.createElement("small");
        formControl.appendChild(small);
    }
    small.className = "smallshown"; // Show the error message
    //small.innerText = message; // Set the error message text
    // Disable the submit button
    const submitButton = document.getElementById("submit"); 
    if (submitButton) {
        submitButton.disabled = true;
    }
}
function setSuccess(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    if (small) {
        small.className = "smallhidden"; // Hide the error message
        small.innerText = ""; // Clear the message text
    }
    // Enable the submit button
    const submitButton = document.getElementById("submit");
    if (submitButton) {
        submitButton.disabled=false;
    }
}
function checkValidation() {
    nameValidation();
    dateOfBirthValidation();
    genderValidation();
    phoneNumberValidation();
    emailValidation();
    mediaValidation();
    numberOfTicketValidation();
    checkPayment();
}


