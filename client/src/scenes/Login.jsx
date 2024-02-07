import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Login() {
  const navigate = useNavigate();
 

  // const handleclick = ()

  const handlelogin = () => {
    navigate("/login");
  };

  const handleregister = () => {
    navigate("/register");
  };

  return (
    <form className="bg-[#FFFAFA]    bg-cover h-screen w-screen flex flex-col justify-start pt-8 ">
      <div className="flex justify-end gap-3 pt-5 pr-5">
        <Button handleclick={handlelogin} text={"Login"} />
        <Button handleclick={handleregister} text={"Register"} />
      </div>
      <div className="flex flex-col w-3/12 mx-auto gap-4">
        <h1 className="text-black font-semibold text-2xl flex justify-center">
          Login
        </h1>
        <input
          className="bg-white border-solid border-black border-2 px-4 py-2 rounded-md text-black"
          type="text"
          placeholder="Enter Email"
        />
        <input
          className="bg-white border-solid border-black border-2 px-4 py-2 rounded-md text-black"
          type="text"
          placeholder="Password"
        />
        <Button text={"Login"} />
      </div>
    </form>
  );
}

export default Login;
