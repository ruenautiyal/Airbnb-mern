import { Link } from "react-router-dom";
import{useState} from "react";
import axios from "axios";

export default function Register() {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  async function registerUser(ev){
    ev.preventDefault();
    try{
    await axios.post('http://localhost:4000/register',{
      name,email,password
    });
    alert('Registration successful.Now you can log in');
  } catch(err){
    alert('Registration failed.Please try again later');

  }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full transform transition-all duration-500 hover:scale-105">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Register</h1>
        <form className="space-y-6"  onSubmit={registerUser}>
        <div>
            <input
              type="name"
              placeholder="name"
              value={name}
              onChange={ev =>setName(ev.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="your@email.com" 
              value={email} 
              onChange={ev =>setEmail(ev.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={ev =>setPassword(ev.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all transform hover:scale-105"
          >
            Register
          </button>
        </form>
        <div className="text-center mt-6 text-gray-600">
          Have an account?{" "}
          <Link
            to="/login"
            className="text-purple-600 underline hover:text-purple-700 transition-all"
          >
            login
          </Link>
        </div>
      </div>
    </div>
  );
}