import {Route, Routes} from "react-router-dom";

import Login from './components/Login';
import Layout from './components/Layout';
import Register from './components/Register';
import axios from "axios";
import { UserContextProvider } from "./UserContext";
axios.defaults.baseURL='http://localhost:4000';
axios.defaults.withCredentials=true;

function App(){
  return (
    <UserContextProvider>
    <Routes>
      <Route path ="/" element = {<Layout/>}>
     <Route path = "/login" element ={<Login/>} />
      <Route path = "/register" element ={<Register/>} />     
      </Route>
    </Routes>
    </UserContextProvider>
  )
}
export default App;