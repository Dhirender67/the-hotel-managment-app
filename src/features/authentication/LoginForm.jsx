import { useState } from "react";
import useLogin from "./useLogin";

function LoginForm() {
  const { loginMutate, isLoading } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    loginMutate(
      { email, password },
      {
        // Feild ko empty karne ke liye hai
        onSettled: () => {
          (setEmail(""), setPassword(""));
        },
      },
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-2 max-w-md space-y-6 rounded-lg bg-white p-6 shadow-md"
    >
      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email address
        </label>

        <input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </label>

        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      {/* Button */}
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          {isLoading ? "Loading...." : "Login"}
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
