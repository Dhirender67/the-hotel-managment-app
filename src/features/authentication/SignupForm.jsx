import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import useSignUp from "./useSignUp";
import Spinner from "../../ui/Spinner";

function SignupForm() {
  const { register, formState, handleSubmit, getValues, reset } = useForm();
  const { signupMutate, isSignup } = useSignUp();
  const { errors } = formState;

  function onSubmit(data) {
    console.log("MUTATE DATA", data);

    signupMutate(data, { onSettled: reset() });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 bg-white p-6 w-[400px] rounded-lg"
    >
      {/* Full Name */}
      <div className="flex flex-col">
        <label htmlFor="fullName" className="label">
          Full name
        </label>
        <input
          type="text"
          id="fullName"
          {...register("fullName", { required: "This field is required" })}
          className="form-control"
        />
        {errors.fullName && (
          <p className="feild-error">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label htmlFor="email" className="label">
          Email address
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter a valid email address",
            },
          })}
          className="form-control"
        />
        {errors.email && <p className="feild-error">{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div className="flex flex-col">
        <label htmlFor="password" className="label">
          Password (min 8 characters)
        </label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Please enter minimum 8 charector",
            },
          })}
          className="form-control"
        />
        {errors.password && (
          <p className="feild-error">{errors.password.message}</p>
        )}
      </div>

      {/* Repeat Password */}
      <div className="flex flex-col">
        <label htmlFor="passwordConfirm" className="label">
          Repeat password
        </label>
        <input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues("password") || "Passwords do not match",
          })}
          className="form-control"
        />
        {errors.passwordConfirm && (
          <p className="feild-error">{errors.passwordConfirm.message}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-2">
        <Button type="reset" variation="ternary">
          Cancel
        </Button>
        <Button type="submit" variation="primary">
          {isSignup ? <Spinner size="w-6 h-6" /> : "Create new user"}
        </Button>
      </div>
    </form>
  );
}

export default SignupForm;
