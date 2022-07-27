const form = document.querySelector(".login-form");

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    
    event.preventDefault();
    
    const {
        elements: { email, password } 
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        window.alert('ALL THE FIELDS SHOULD BE FILLED IN');
    } 
    else {
        const output = {
            Email: `${email.value}`,
            Password: `${password.value}`,
        };
        console.log(output);
    }
    
    event.currentTarget.reset();
}

// console.log(`Email: ${email.value}, Password: ${password.value}`)