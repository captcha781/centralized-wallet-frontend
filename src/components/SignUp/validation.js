import isEmpty from "../../functions/isEmpty"

const validation = (value) => {
    let errors = {}
    const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/

    if(isEmpty(value.name)){
        errors.name = "Field cannot be empty"
    }

    if(isEmpty(value.email)){
        errors.email = "Field cannot be empty"
    } if(!mailRegex.test(value.email)){
        errors.email = "Invalid email"
    }

    if(isEmpty(value.password)){
        errors.password = "Field cannot be empty"
    } else if(!passwordRegex.test(value.password)){
        errors.password = "Password should contain 1 Uppercase, 1 Lowercase, 1 Number, 1 Symbol, and between 6 to 20 chars length"
    }

    if(isEmpty(value.confirmPassword)) {
        errors.confirmPassword = "Field cannot be empty"
    } else if(value.password !== value.confirmPassword) {
        errors.confirmPassword = "Both passwords should match"
    }

    return errors
}

export default validation