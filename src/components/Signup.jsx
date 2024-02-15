import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/features/auth";
import { Button, Input, Logo } from "./index";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const Signup = () => {
  const navigate = useState();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handlesubmit } = useForm();

  const signUp = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrrntUser();
        if (userData) dispatch(authLogin(userData));
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg
      bg-gray-100 rounded-xl p-10 border
        border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create your account
        </h2>

        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary
      transition-all duration-200
      hover: underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handlesubmit(signUp)}>
          <div className="space-y-5">
            <Input
              label="name"
              placeholder="Enter your fullname"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="email"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      value
                    ) || "Invalid email address",
                },
              })}
            />
            <Input
              type="password"
              label="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Create account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
