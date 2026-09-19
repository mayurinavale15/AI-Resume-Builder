import AuthLayout from "../../components/Auth/AuthLayout";
import LoginForm from "../../components/Auth/LoginForm";

function Login() {
  return (
    <AuthLayout title="Login">
      <LoginForm />
    </AuthLayout>
  );
}

export default Login;