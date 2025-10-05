import { useForm } from "react-hook-form";
import Button from "../components/Button";
import TemplateImgs from "../components/TemplateImgs";
import TemplateInputs from "../components/TemplateInputs";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
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
        <TemplateImgs src="/womansmile.png" className="h-screen" />
      </div>

      <div className="flex flex-col justify-center px-20">
        <TemplateImgs src="/Frame 12.png" alt="logo" className="mb-6 w-50" />
        <h1 className="text-[#8E6447] font-[600] text-2xl py-4">
          Fill out the form correctly
        </h1>
        <p>We will send new password to your email</p>
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

          <div>
            <Button className="flex justify-center p-3 mt-4 cursor-pointer rounded-md bg-[#ff8906] w-full">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
