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
        console.log(`Email: ${email.value}, Password: ${password.value}`)
    }

    event.currentTarget.reset();
}