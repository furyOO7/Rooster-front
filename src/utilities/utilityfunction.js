export const  findFormErrors = (formData) => {
    console.log(formData)

    const { firstname= "", email= "", password= "", cpassword= "" } = formData;
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordregex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}$/
    const newErrors = {}
    // name errors
    if (!firstname || firstname === '') newErrors.firstname = 'Firstname cannot be blank!'
    else if (firstname.length > 50) newErrors.name = 'Firstname is too long!'
    // email errors
    console.log(email.match(emailregex));
    if (!email || email === '' || !email.match(emailregex)) newErrors.email = 'Please enter a valid email address'
    // password errors
    if (!password  || !password.match(passwordregex)) newErrors.password = 'Password invalid, Must contain at least one letter, one number and one special character and should have atleast 5 characters'
    // comment errors
    if (!cpassword || cpassword === '' || cpassword !== password) newErrors.cpassword = 'Password do not match'
    return newErrors
}