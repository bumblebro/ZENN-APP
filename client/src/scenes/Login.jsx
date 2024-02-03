import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Login() {
  const navigate = useNavigate();

  const handlelogin = () => {
    navigate("/login");
  };

  const handleregister = () => {
    navigate("/register");
  };

  return (
    <div className="bg-hero-pattern    bg-cover h-screen w-screen flex flex-col justify-start pt-8 ">
      <div className="flex justify-end gap-3 pt-5 pr-5">
        <Button handleclick={handlelogin} text={"Login"} />
        <Button handleclick={handleregister} text={"Register"} />
      </div>
      <div className="flex flex-col w-3/12 mx-auto gap-4">
        <h1 className="text-white font-semibold text-2xl flex justify-center">
          Login
        </h1>
        <input
          className="bg-black bg-opacity-40 px-4 py-2 rounded-md text-white"
          type="text"
          placeholder="Enter Email"
        />
        <input
          className="bg-black bg-opacity-40 px-4 py-2 rounded-md text-white"
          type="text"
          placeholder="Password"
        />
        <Button text={"Login"} />
      </div>
    </div>
  );
}

export default Login;
