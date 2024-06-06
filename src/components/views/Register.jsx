import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import { redirect, useNavigate } from "react-router-dom";

export const Register = ({ handleCreateUser }) => {
  const navigate = useNavigate();
  const { onInputChange, email, password, name } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let resp = handleCreateUser({ email, password, name });
    if (resp) {
      Swal.fire({
        title: "Account created succesfully!",
        text: "You will get redirected to the main page",
        icon: "success",
      }).then(() => {
        navigate("/");
        navigate(0);
      });
    } else {
      Swal.fire({
        title: "Error creating the account",
        text: "Please try again later or contact support.",
        icon: "error",
      });
    }
  };

  return (
    <div className="w-full flex justify-center h-[calc(100vh-64px)] align-middle items-center">
      <div className=" bg-white rounded-lg p-10 shadow-md w-[500px]">
        <h1 className="text-2xl font-bold ">Register</h1>
        <hr className="text-2xl my-6  h-1 mx-auto   bg-gray-100 border-0 rounded   dark:bg-gray-700" />
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="">
            <h1>Name</h1>
            <input
              type="text"
              name="name"
              className="rounded-lg bg-slate-200 w-full h-10 p-1 "
              value={name}
              required
              onInput={onInputChange}
            />
          </div>
          <div className="">
            <h1>Email</h1>
            <input
              type="email"
              name="email"
              className="rounded-lg bg-slate-200 w-full h-10 p-1 "
              value={email}
              required
              onInput={onInputChange}
            />
          </div>
          <div>
            <h1>Password</h1>
            <input
              type="password"
              name="password"
              className="rounded-lg bg-slate-200 w-full h-10 p-1"
              value={password}
              onInput={onInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className="rounded-lg text-white font-semibold w-full h-10 p-1 btn-color"
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};
