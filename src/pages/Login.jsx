import { useForm } from "react-hook-form";
import Button from "../components/Button";
import TemplateImgs from "../components/TemplateImgs";
import TemplateInputs from "../components/TemplateInputs";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import OrDivider from "../components/OrDivider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("email tidak valid")
      .required("email is required"),
    password: yup.string().required("password wajib diisi"),
  });

  const { handleSubmit, register } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="grid grid-cols-[25%_70%] min-w-full min-h-screen">
      <div className="w-full">
        <TemplateImgs src="/Register.png" className="h-screen" />
      </div>

      <div className="p-25 mt-8">
        <TemplateImgs src="/Frame 12.png" alt="logo" className="mb-6" />

        <h1 className="text-[#8E6447] font-semibold text-2xl py-4">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TemplateInputs
            htmlFor="email"
            id="email"
            type="email"
            placeholder="Enter Your Email"
            src1="/mail.png"
            alt1="Email icon"
            inputProps={{ ...register("email") }}
          >
            Email
          </TemplateInputs>
          <TemplateInputs
            htmlFor="password"
            id="password"
            type="password"
            placeholder="Enter Your Password"
            src1="/Password.png"
            alt1="Password icon"
            inputProps={{ ...register("password") }}
            src2="/EyeSlash.png"
            alt2="Toggle password visibility"
          >
            Password
          </TemplateInputs>
          <div>
            <Button
              className="flex w-full justify-end cursor-pointer text-[#FF8906]"
              onClick={() => navigate("/forgot-password")}
            >
              Lupa password
            </Button>
            <Button className="flex justify-center p-3 mt-4 cursor-pointer rounded-md bg-[#ff8906] w-full">
              Login
            </Button>
            <p className="flex justify-center mt-2">
              Not Have An Account?
              <Button className="cursor-pointer pl-2 text-[#ff8906]">
                Register
              </Button>
            </p>
            <OrDivider />
            <div className="flex space-x-4 justify-center mt-5">
              <Button className="flex justify-center cursor-pointer items-center gap-2 shadow-2xl h-20 w-1/2 rounded-2xl">
                <img src="/facebook.png" alt="facebook" /> Facebook
              </Button>
              <Button className="flex items-center justify-center cursor-poi gap-2 w-1/2 shadow-2xl rounded-2xl h-20">
                <img src="/google.png" alt="google" /> Google
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
