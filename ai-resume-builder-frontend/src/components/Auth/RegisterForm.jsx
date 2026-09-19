import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Registration Successful");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

      {/* Full Name */}
      <div>
        <input
          type="text"
          placeholder="Enter Full Name"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
          {...register("name", {
            required: "Full Name is required",
          })}
        />

        {errors.name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email address",
            },
          })}
        />

        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          className="w-full border rounded-lg p-3 pr-12 outline-none focus:ring-2 focus:ring-green-500"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-4 text-gray-500 hover:text-green-600"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>

        {errors.password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="relative">
        <input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          className="w-full border rounded-lg p-3 pr-12 outline-none focus:ring-2 focus:ring-green-500"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
        />

        <button
          type="button"
          onClick={() =>
            setShowConfirmPassword(!showConfirmPassword)
          }
          className="absolute right-4 top-4 text-gray-500 hover:text-green-600"
        >
          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </button>

        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Register Button */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
      >
        Create Account
      </button>

    </form>
  );
}

export default RegisterForm;