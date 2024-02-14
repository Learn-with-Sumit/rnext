import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "../firebase";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
      event.preventDefault();
      try{
        const user = await registerWithEmailAndPassword(email, password);
        console.log(user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }

    return (
        <div className="flex flex-col p-4 justify-center items-center">
            <h1 className="text-3xl my-2">Register</h1>
            <form className="flex flex-col">
                <div className="my-1">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Email address"
                        className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Password"
                        className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
                    />
                </div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-black text-white p-1 rounded-md m-auto">
                  Register
                </button>
            </form>
            <p className="my-2">
              Already Have an Account? {' '}
              <NavLink to="/login" className="underline">
                Sign In
              </NavLink>
            </p>
        </div>
    );
};

export default Register;
