import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";

function Account() {
  return (
    <>
      <div>
        <h3 className="font-semibold text-lg">Update User data</h3>
        <UpdateUserDataForm />
      </div>

      <div>
        <h3 className="font-semibold text-lg my-4">Update User data</h3>
        <UpdatePasswordForm />
      </div>
    </>
  );
}

export default Account;
