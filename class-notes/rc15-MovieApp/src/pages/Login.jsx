import { useContext, useState } from 'react';
import GoogleIcon from '../assets/icons/GoogleIcon';
use

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {giris}=useContext()
  const handleSubmit=(e)=>{
    e.preventDefault()
  }




  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div className={`form-container mt-[5vh] w-[380px] h-[580px]`}>
        <form >
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign In
          </h2>
        
        
         
          <div className="relative z-0 w-full mb-5 group">
            <input
              class=" peer"
              placeholder=" "
              name="floating_email"
              type="email"
              required
              onChange={(e)=>setEmail(e.target.value)}
            />
            <label htmlFor="floating_email">Email</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              class=" peer"
              placeholder=" "
              name="floating_password"
              type="password"
              required
              onChange={(e)=>setPassword(e.target.value)}
            />
            <label htmlFor="floating_password">Password</label>
          </div>
          <button type="submit" className="btn-danger">
            Login
          </button>
          <button
            type="button"
            className="btn-danger flex justify-between text-center "
          
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login