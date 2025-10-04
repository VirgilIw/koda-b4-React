import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import TemplateImgs from "../components/TemplateImgs";
import TemplateInputs from "../components/TemplateInputs";
import Button from "../components/Button";
import OrDivider from "../components/OrDivider";

const validationSchema = yup.object({
  fullName: yup.string().trim().required("Full name wajib diisi"),
  email: yup.string().trim().email("Email tidak valid").required("Email wajib"),
  password: yup
    .string()
    .min(6, "Minimal 6 karakter")
    .required("Password wajib"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password tidak cocok")
    .required("Konfirmasi password wajib"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/5 h-screen">
        <TemplateImgs
          src="/gelaskopi.png"
          alt="kopi"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-4/5 flex items-start justify-center py-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-3xl rounded-md px-8"
        >
          <TemplateImgs src="/Frame 12.png" alt="logo" className="mb-6" />

          <h1 className="text-[#8E6447] font-semibold text-2xl py-4">
            Register
          </h1>

          <TemplateInputs
            htmlFor="full-name"
            id="full-name"
            placeholder="Enter Your Full Name"
            inputProps={{ ...register("fullName") }}
            error={errors.fullName?.message}
            src1="/Profile.png"
            alt1="Profile icon"
          >
            Full Name
          </TemplateInputs>

          <TemplateInputs
            htmlFor="email"
            id="email"
            type="email"
            placeholder="Enter Your Email"
            inputProps={{ ...register("email") }}
            error={errors.email?.message}
            src1="/mail.png"
            alt1="Email icon"
          >
            Email
          </TemplateInputs>

          <TemplateInputs
            htmlFor="password"
            id="password"
            type="password"
            placeholder="Enter Your Password"
            inputProps={{ ...register("password") }}
            error={errors.password?.message}
            src1="/Password.png"
            alt1="Password icon"
            src2="/EyeSlash.png"
            alt2="Toggle password visibility"
          >
            Password
          </TemplateInputs>

          <TemplateInputs
            htmlFor="confirm-password"
            id="confirm-password"
            type="password"
            placeholder="Enter Your Password Again"
            inputProps={{ ...register("confirmPassword") }}
            error={errors.confirmPassword?.message}
            src1="/Password.png"
            alt1="Password icon"
            src2="/EyeSlash.png"
            alt2="eye"
          >
            Confirm Password
          </TemplateInputs>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 w-full bg-[#FF8906] text-black py-3 rounded-md cursor-pointer hover:bg-[#e67e05] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Submitting..." : "Register"}
          </Button>
          <OrDivider />
          <div className="flex space-x-4 justify-center mt-5">
            <Button className="flex justify-center cursor-pointer items-center gap-2 shadow-2xl h-20 w-1/2 rounded-2xl">
              <img src="/facebook.png" alt="facebook" /> Facebook
            </Button>
            <Button className="flex items-center justify-center cursor-pointer gap-2 w-1/2 shadow-2xl rounded-2xl h-20">
              <img src="/google.png" alt="google" /> Google
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
