function loginUser(email, password) {
    // check email
    if(email = ""){
        console.log("Email required");
    }

    // check password length
    if(password.length < 6){
        console.log("Weak password");
    }

    // dummy user data
    const savedEmail = "test@gmail.com";
    const savedPassword = "123456";

    // validate user
    if(email == savedEmail && password = savedPassword){
        console.log("Login success");
    } else {
        console.log("Invalid credentials");
    }

    // extra check
    if(password.length > 10){
        console.log("Password too long");
    }
}

// test
loginUser("test@gmail.com", "123456");
