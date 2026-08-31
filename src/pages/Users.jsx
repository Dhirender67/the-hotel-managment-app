import SignupForm from "../features/authentication/SignupForm";

function NewUsers() {
  return (
    <>
      <div>
        <h1 className="mb-8 font-semibold">All New Users</h1>
        <SignupForm />
      </div>
    </>
  );
}

export default NewUsers;
