import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="">
      <div
        className="h-screen rounded-bl-full flex items-center justify-center"
        style={{ backgroundColor: "#8E0F5D" }}
      >
        <div className="container px-5">
          <div className="p-5 h-auto m-auto border w-full md:w-[400px] bg-white rounded-lg">
            <div className="text-center">
              <h1>Logo</h1>
            </div>
            <div className="my-5">
              <h1 className="font-extrabold text-gray-700">Sign In</h1>
            </div>
            <div className="flex flex-col gap-5">
              <form action="" className="flex flex-col gap-5">
                <div className="border-b">
                  <input
                    type="email"
                    placeholder="email"
                    className="w-full outline-none"
                  />
                </div>
                <div className="border-b">
                  <input
                    type="password"
                    name=""
                    placeholder="password"
                    className="w-full outline-none"
                  />
                </div>
                <div>
                  <p className="text-[13px] text-custom-purple">
                    Forgot Password ?
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <button className="border w-[150px] py-2 bg-custom-purple rounded-lg text-white">
                    Sign In
                  </button>
                  <button className="border border-custom-purple w-[150px] py-2 rounded-lg ">
                    Cancel
                  </button>
                </div>
              </form>
              <div>
                <span className="text-[14px]">
                  Not Registerd?{" "}
                  <NavLink to="/signup">
                    <p className="inline text-custom-purple">Sign Up</p>
                  </NavLink>
                </span>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-700">
                  Or continue with social account
                </p>
              </div>
              <div className="text-center">
                <button className="border w-full py-2 rounded-lg border-custom-purple">
                  Sign In With Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
