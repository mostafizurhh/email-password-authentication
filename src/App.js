import { getAuth } from 'firebase/auth';
import './App.css';
import app from './firebase/firebase.init';

const auth = getAuth(app);

const handleRegister = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  console.log(email, password);
}

const handleEmailOnChange = event => {
  console.log(event.target.value)
}

const handlePasswordOnBlur = event => {
  console.log(event.target.value)
}

function App() {
  return (
    <div className='App'>
      <form onSubmit={handleRegister}>
        <input onChange={handleEmailOnChange} type="email" name="email" id="" placeholder='Enter your email' />
        <br /> <br />
        <input onBlur={handlePasswordOnBlur} type="password" name="password" id="" placeholder='Eter your password' />
        <br /> <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
