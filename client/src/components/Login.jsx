import { useContext, useState } from "react";
import { UserContext } from "../UserContext.jsx";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[redirect,setRedirect]=useState(false);
  const{setUser}=useContext(UserContext);
  
  async function handleLoginSubmit(ev){
    ev.preventDefault();
    try{
    const data=await axios.post('http://localhost:4000/login',{email,password});
    setUser(data.user);
  
    alert('Login successful');
    setRedirect(true);
  }catch(err){
    alert('Login failed');
   }}
    if(redirect){
      return <Navigate to={'/'}/>
    }

  
    

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full transform transition-all duration-500 hover:scale-105">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Login</h1>
        <form className="space-y-6" onSubmit={handleLoginSubmit}>
          <div>
            <input
              type="email"
              placeholder="your@email.com" value={email} onChange={ev=>setEmail(ev.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password" value={password} onChange={ev=>setPassword(ev.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all transform hover:scale-105"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-6 text-gray-600">
          Don't have an account yet?{" "}
          <Link
            to="/register"
            className="text-purple-600 underline hover:text-purple-700 transition-all"
          >
            Register now
          </Link>
        </div>
      </div>
    </div>
  );
}