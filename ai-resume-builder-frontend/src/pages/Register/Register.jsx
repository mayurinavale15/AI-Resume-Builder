import AuthLayout from "../../components/Auth/AuthLayout";
import RegisterForm from "../../components/Auth/RegisterForm";

function Register() {
  return (
    <AuthLayout title="Create Account">
      <RegisterForm />
    </AuthLayout>
  );
}

export default Register;