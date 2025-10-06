import { useState } from "react";
import Button from "./Button";

const TemplateInputs = ({
  htmlFor,
  id,
  placeholder,
  inputProps = {},
  children,
  src1,
  alt1,
  alt2,
  type = "text",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === "password";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = isPasswordField && showPassword ? "text" : type;

  return (
    <div className="mb-4">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium mb-1 w-full"
      >
        {children}
      </label>

      <div className="flex items-center border border-slate-400 rounded px-3 py-2">
        <img src={src1} alt={alt1} className="mr-2" />
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          className="w-full outline-none"
          {...inputProps}
        />
        {isPasswordField && (
          <Button
            type="button"
            onClick={togglePasswordVisibility}
            className="cursor-pointer p-1 hover:bg-gray-100 rounded transition-colors"
          >
            <img
              src={showPassword ? "/eye.png" : "/EyeSlash.png"}
              alt={alt2 || "Toggle password visibility"}
              className="w-4 h-4"
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default TemplateInputs;
