//handlelogin input and set state
export const handleRegInput = (e,signUp,setSignUp) => {
    let valid 
    if (e.target.name==='email') {
      const checkValidEmail= /\S+@\S+\.\S+/
      valid = checkValidEmail.test(e.target.value)
    }
    if (e.target.name==='password') {
      const checkValidPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
      valid = checkValidPassword.test(e.target.value)
    }
    if(valid){
      const newInput = { ...signUp };
      newInput[e.target.name] = e.target.value;
      setSignUp(newInput);
    }
  };

//handle login input and set state
export const handleLoginInput = (e,loged,setLoged) => {
    const newInput = { ...loged };
    newInput[e.target.name] = e.target.value;
    setLoged(newInput);
  };