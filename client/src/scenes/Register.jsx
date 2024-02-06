import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handlelogin = () => {
    navigate("/login");
  };

  const handleregister = () => {
    navigate("/register");
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (password != confirmpassword) {
      alert("Password Not Matching");
      return;
    }
    try {
      const data = await axios.post("http://localhost:3000/auth/register", {
        username,
        email,
        password,
      });

      if (data) {
        console.log(data.data);
        navigate("/login");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="bg-hero-pattern    bg-cover h-screen w-screen flex flex-col justify-start pt-8 ">
      <div className="flex justify-end gap-3 pt-5 pr-5">
        <Button handleclick={handlelogin} text={"Login"} />
        <Button handleclick={handleregister} text={"Register"} />
      </div>
      <form className="flex flex-col w-3/12 mx-auto  gap-4 ">
        <h1 className="text-white font-semibold text-2xl flex justify-center ">
          Register
        </h1>
        <input
          className="bg-black bg-opacity-60 px-4 py-2 rounded-md text-white"
          type="text"
          placeholder="Enter Name"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          className="bg-black bg-opacity-60 px-4 py-2 rounded-md text-white "
          type="text"
          placeholder="Enter Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="bg-black bg-opacity-60 px-4 py-2 rounded-md text-white"
          type="text"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          className="bg-black bg-opacity-60 px-4 py-2 rounded-md text-white"
          type="text"
          placeholder="Confirm Password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <Button text={"Submit"} handleclick={handleClick} />
      </form>
    </div>
  );
}

export default Register;
