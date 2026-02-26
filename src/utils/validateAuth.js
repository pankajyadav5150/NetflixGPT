
export const validateAuth=(data,type)=>{
   const {name,email,password}=data;
   const errors={};
   const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const nameRegex=/^[a-zA-Z\s]+$/;
   const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

   if(type === "signup"){
    if(!name.trim()){
        errors.name="Name is required";
    }
    else if(!nameRegex.test(name.trim())){
        errors.name="Name is not valid";
    }
    }

    if(!email.trim()){
        errors.email="Email is required";
    }else if(!emailRegex.test(email.trim())){
        errors.email="Email is not valid";
    }

   if(!passwordRegex.test(password)){
        errors.password="Password is invalid";
    }

    return errors;
}