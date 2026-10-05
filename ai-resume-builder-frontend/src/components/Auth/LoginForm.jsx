import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import api from "../../services/api";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await api.post("/auth/login", data);

      console.log("Login Response:", response.data);

      // Save JWT token
      localStorage.setItem("token", response.data.token);

      toast.success(response.data.message || "Login Successful");
      navigate("/dashboard");
      
    } catch (error) {
      console.error("Login Error:", error);

      toast.error(
        error.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
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
          className="w-full border rounded-lg p-3 pr-12 outline-none focus:ring-2 focus:ring-blue-500"
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
          className="absolute right-4 top-4 text-gray-500 hover:text-blue-600"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>

        {errors.password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" />
          Remember Me
        </label>

        <a
          href="/forgot-password"
          className="text-blue-600 hover:underline"
        >
          Forgot Password?
        </a>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      {/* Divider */}
      <div className="flex items-center">
        <hr className="flex-1" />
        <span className="px-3 text-gray-500">OR</span>
        <hr className="flex-1" />
      </div>

      {/* Google Button */}
      <button
        type="button"
        className="w-full border py-3 rounded-lg hover:bg-gray-100 transition"
      >
        Continue with Google
      </button>

    </form>
  );
}

export default LoginForm;