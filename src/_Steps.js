/* 
---------------------------
Authentication Terminology
---------------------------
1. "register/signup (first time create a user)"
2. "login/signin (already you have a user account created)"

----------------------
get value from a Form
----------------------
1. create an onSubmit function >> <form onSubmit={}></form>
2. for the function write the following >>
const handleRegister = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  console.log(email, password);
}

-------------------------------------------------
get changing values from input field when typing
-------------------------------------------------
1. create an onChange function inside input tag >> 
<input onChange={handleEmailOnChange} type="email" name="email" id="" placeholder='Enter your email' />
2. inside onChange function write >>
const handleEmailOnChange = event => {
  console.log(event.target.value)
}
*/
