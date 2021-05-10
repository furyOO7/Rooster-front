export const  findFormErrors = (formData, page) => {
    let { firstname= "", email= "", password= "", cpassword= "" } = formData;
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            const passwordregex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}$/
            const newErrors = {}
    switch (page) {
        case 'signup':
            
            // name errors
            if (!firstname || firstname === '') newErrors.firstname = 'Firstname cannot be blank!'
            else if (firstname.length > 50) newErrors.name = 'Firstname is too long!'
            // email errors
            if (!email || email === '' || !email.match(emailregex)) newErrors.email = 'Please enter a valid email address'
            // password errors
            if (!password  || !password.match(passwordregex)) newErrors.password = 'Password invalid, Must contain at least one letter, one number and one special character and should have atleast 5 characters'
            // comment errors
            if (!cpassword || cpassword === '' || cpassword !== password) newErrors.cpassword = 'Password do not match'
            break;
            case 'signin':
                // email errors
                if (!email || email === '' || !email.match(emailregex)) newErrors.email = 'Please enter a valid email address'
                // password errors
                if (!password  || !password.match(passwordregex)) newErrors.password = 'Password invalid, Must contain at least one letter, one number and one special character and should have atleast 5 characters'
                break;
    
        default:
            break;
    }
   
    return newErrors
}

export const setCookie = (name,value,days) => {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
export const getCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
export const eraseCookie = (name) => {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}