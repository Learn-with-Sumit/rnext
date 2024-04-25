'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

const RegistrationForm = () => {
  const [error, setError] = useState("");

  const router = useRouter();

  async function onSubmit (event) {

      event.preventDefault();
      try {
        const formData = new FormData(event.currentTarget);
        const fname = formData.get('fname');
        const lname = formData.get('lname');
        const email = formData.get('email');
        const password = formData.get('password');

        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname,
            lname,
            email,
            password,
          }),
        });
        res.status === 201 &&
          router.push("/login");
      } catch (error) {
        setError(error.message);
      }
    }


  return (
    <>
      <div className="text-xl text-red-500 text-center">{error && error}</div>
      <form className="login-form" onSubmit={onSubmit}>
      <div>
        <label htmlFor="fname">First Name</label>
        <input type="text" name="fname" id="fname" />
      </div>

      <div>
        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lname" id="lname" />
      </div>

      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <button type="submit" className="btn-primary w-full mt-4">
        Create account
      </button>
    </form>
    </>

  );
};

export default RegistrationForm;
