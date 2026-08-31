import { useForm } from "react-hook-form";
import useUpdateUser from "./useUpdateUser";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { userUpdateMutate, isUpadateUse } = useUpdateUser();

  function onSubmit({ password }) {
    userUpdateMutate({ password }, { onSuccess: reset });
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl space-y-5 bg-white p-6 rounded-lg mt-4"
    >
      {/* Password */}
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          New Password (min 8 characters)
        </label>

        <input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpadateUse}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-gray-100"
        />

        {errors?.password?.message && (
          <p className="text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="passwordConfirm"
          className="text-sm font-medium text-gray-700"
        >
          Confirm password
        </label>

        <input
          type="password"
          id="passwordConfirm"
          autoComplete="new-password"
          disabled={isUpadateUse}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-gray-100"
        />

        {errors?.passwordConfirm?.message && (
          <p className="text-sm text-red-600">
            {errors.passwordConfirm.message}
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-end gap-3">
        <button
          onClick={reset}
          type="reset"
          className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isUpadateUse}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isUpadateUse ? "Updating..." : "Update password"}
        </button>
      </div>
    </form>
  );
}

export default UpdatePasswordForm;
