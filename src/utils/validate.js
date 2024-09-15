export const checkValidData = (email, password) => {

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!#\$%&\?])[a-zA-Z\d!#\$%&\?]{8,}$/.test(password);

    if(!isEmailValid) return "Email id is not valid";

    if(!isPasswordValid) return "Password is not valid"

    return null;
    
}