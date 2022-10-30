// Get html elements/ classes/ ids and assign them to variables
const radio = document.querySelectorAll("input");
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");
const selectRateCard = document.querySelector(".sel-rate");

// Loop through all available input elements
for (let e = 0; e < radio.length; e++) {

    // Check if radio button is active or selected
    radio[e].addEventListener("change", () => {
    
        // Grab the value of the selected input element
        let radioValue = radio[e].getAttribute("value");

        // Insert the value into the thank you card
        document.getElementById("rate-no").textContent = radioValue;

        // Enable the submit button if the radio button is checked else disable the button
        if (radio[e].checked) {
            submit.removeAttribute("disabled");
        } else {
            submit.setAttribute.disabled = "true";
        }
    
    });

}

// Hide the rate card (homepage) and show the thank you card when submit button is clicked
submit.addEventListener("click", () => {
    selectRateCard.classList.add("hide");
})

// Show the rate card (homepage) or hide the thank you card after the reset button is clicked
reset.addEventListener("click", () => {
    selectRateCard.classList.remove("hide");
    window.location.reload();
})
