import { useState } from "react";
import Button from "../../ui/Button";
import useUser from "./useUser";
import useUpdateUser from "./useUpdateUser";

function UpdateUserDataForm() {
  const { user } = useUser();
  const { userUpdateMutate, isUpadateUse } = useUpdateUser();
  const { email, fullName: currentFullname } = user.user_metadata;

  const [fullName, setFullName] = useState(currentFullname);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    userUpdateMutate(
      {
        fullName,
        avatar,
      },
      {
        onSuccess: () => {
          setAvatar(null);
        },
      },
    );
  }

  // Cancel Handle
  function handelCancel() {
    (setFullName(currentFullname), setAvatar(null));
  }

  return (
    <>
      <form className="w-full max-w-2xl space-y-5 bg-white p-6 rounded-lg mt-4">
        <div class="grid grid-cols-1 md:grid-cols-[180px_1fr] items-center gap-2 md:gap-6">
          <label for="email" className="text-sm font-medium text-gray-700">
            Email address
          </label>

          <input
            id="email"
            type="email"
            value={email}
            disabled
            className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-500 cursor-not-allowed outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] items-center gap-2 md:gap-6">
          <label for="fullName" className="text-sm font-medium text-gray-700">
            Full name
          </label>

          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            disabled={isUpadateUse}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] items-center gap-2 md:gap-6">
          <label for="avatar" className="text-sm font-medium text-gray-700">
            Avatar image
          </label>

          <input
            id="avatar"
            type="file"
            onChange={(e) => setAvatar(e.target.files[0])}
            accept="image/*"
            disabled={isUpadateUse}
            className="w-full cursor-pointer rounded-md border border-gray-300 bg-white text-sm text-gray-700 file:mr-4 file:cursor-pointer file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-medium file:text-gray-700 hover:file:bg-gray-200"
          />
        </div>
        <div className="flex justify-end gap-3 pt-3">
          <Button
            onClick={handelCancel}
            variation="ternary"
            disabled={isUpadateUse}
          >
            Cancel
          </Button>
          <Button
            variation="primary"
            onClick={handleSubmit}
            disabled={isUpadateUse}
          >
            {isUpadateUse ? "Updating...." : "Update account"}
          </Button>
        </div>
      </form>
    </>
  );
}

export default UpdateUserDataForm;
