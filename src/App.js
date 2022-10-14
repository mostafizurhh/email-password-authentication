import { getAuth } from 'firebase/auth';
import './App.css';
import app from './firebase/firebase.init';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterReactBootstrap from './components/Register/RegisterReactBootstrap';
import RegisterBootstarp from './components/Register/RegisterBootstarp';
import RegisterTailwind from './components/Register/RegisterTailwind';

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
    <div>

      {/* simple html */}
      <form onSubmit={handleRegister} className='mx-auto w-50'>
        <input onChange={handleEmailOnChange} type="email" name="email" id="" placeholder='Enter your email' />
        <br /> <br />
        <input onBlur={handlePasswordOnBlur} type="password" name="password" id="" placeholder='Eter your password' />
        <br /> <br />
        <button type="submit">Register</button>
      </form>
      {/* React Bootstrap */}
      <RegisterReactBootstrap
        handleRegister={handleRegister}
      ></RegisterReactBootstrap>
      {/* Bootstrap */}
      <RegisterBootstarp
        handleRegister={handleRegister}
      ></RegisterBootstarp>
      <RegisterTailwind
        handleRegister={handleRegister}
      ></RegisterTailwind>
    </div>
  );
}

export default App;
