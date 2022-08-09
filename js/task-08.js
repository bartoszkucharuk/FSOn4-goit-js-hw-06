const form = document.querySelector(".login-form");

form.addEventListener("submit",(event) => {
event.preventDefault();

    const {
        elements: { password, email }
    } = event.currentTarget;
    
if (password.value == "" || email.value == ""){
    return alert("All fields need to be filled before sending");
}

    const elements = { password: password.value, email: email.value };
    
console.log(elements);
event.currentTarget.reset();

});
