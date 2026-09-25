"use client";

import { authClient } from "@/app/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
// import { use } from "react";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries())
    console.log(userData);

    const { data, error } = await authClient.signUp.email({
      name: userData.name, // required, The name of the user.
      email: userData.email, // required, The email address of the user.
      password: userData.password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
      // image: "https://example.com/image.png", // An optional profile image of the user.
      callbackURL: "/", // An optional URL to redirect to after the user signs up.
    });

    if (error) {
      alert("Signup failed. Please try again.");
    }

    if (data) {
      alert("Signup successful!");
    }
  }

    return (
      <div className="min-h-screen bg-[#f3f3f3] flex items-center justify-center p-4">
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm w-full max-w-md">
          {/* Heading */}
          <h1 className="text-2xl font-bold text-center text-[#2d2d2d] mb-6">
            Register your account
          </h1>

          {/* Divider */}
          <hr className="border-t border-gray-200 mb-8" />

          {/* Form */}
          <Form className="flex flex-col gap-6" onSubmit={onSubmit}>
            {/* Name Field */}
            <TextField
              isRequired
              name="name"
              type="text"
              className="flex flex-col gap-2"
            >
              <Label className="text-sm font-semibold text-[#2d2d2d]">Your Name</Label>
              <Input
                placeholder="Enter your name"
                className="bg-[#f5f5f5] border-none rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-0 placeholder:text-gray-400"
              />
              <FieldError className="text-xs text-red-500" />
            </TextField>
            {/* Email Field */}
            <TextField
              isRequired
              name="email"
              type="email"
              className="flex flex-col gap-2"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="text-sm font-semibold text-[#2d2d2d]">Email address</Label>
              <Input
                placeholder="Enter your email address"
                className="bg-[#f5f5f5] border-none rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-0 placeholder:text-gray-400"
              />
              <FieldError className="text-xs text-red-500" />
            </TextField>

            {/* Password Field */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              className="flex flex-col gap-2"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label className="text-sm font-semibold text-[#2d2d2d]">Password</Label>
              <Input
                placeholder="Enter your password"
                className="bg-[#f5f5f5] border-none rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-0 placeholder:text-gray-400"
              />
              <Description className="text-xs text-gray-500">
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError className="text-xs text-red-500" />
            </TextField>

            {/* Buttons */}
            <div className="flex flex-col gap-2 mt-2">
              <Button
                type="submit"
                className="w-full bg-[#404040] hover:bg-[#2d2d2d] text-white font-semibold py-3 rounded-md transition-colors"
              >
                Register
              </Button>
              <Button type="reset" variant="secondary" className="w-full">
                Reset
              </Button>
            </div>

            {/* Footer Text */}
            <p className="text-center text-sm font-medium text-gray-600 mt-2">
              Do You Have An Account ?{" "}
              <a href="/signin" className="text-[#f87171] hover:underline font-semibold">
                Login
              </a>
            </p>
          </Form>
        </div>
      </div>
    );
  };

  export default SignUpPage;