import { SignupForm } from "./_components/signup-form";

const RegisterPage = () => {
  return (
    <div className="w-full flex-col h-screen flex items-center justify-center">
      <div className="container">
        <SignupForm />
      </div>
    </div>
  );
};
export default RegisterPage;
