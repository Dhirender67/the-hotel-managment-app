import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";

function Login() {
  return (
    <>
      <div className="min-h-screen grid grid-cols-[48rem] justify-center content-center gap-2 bg-gray-50">
        <Logo />
        <h2 className="text-center font-semibold font-lg">
          Login into your Account
        </h2>
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
