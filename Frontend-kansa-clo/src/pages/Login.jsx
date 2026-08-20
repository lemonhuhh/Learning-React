import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="relative isolate grid min-h-[calc(100vh-80px)] place-items-center overflow-hidden bg-[#f7fafd] px-5 py-14 max-[480px]:px-4 max-[480px]:py-7">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_10%,rgba(136,189,242,0.36),transparent_26rem),radial-gradient(circle_at_88%_92%,rgba(189,221,252,0.65),transparent_25rem)]"
        aria-hidden="true"
      />
      <section
        className="w-full max-w-[440px] rounded-3xl border border-[#d6e8f8] bg-white/92 p-[42px] text-left shadow-[0_24px_60px_rgba(56,73,89,0.14)] max-[480px]:rounded-[18px] max-[480px]:px-6 max-[480px]:py-[30px]"
        aria-labelledby="login-title"
      >
        <div
          className="mb-7 grid size-[46px] place-items-center rounded-[14px] bg-[#384959] font-extrabold tracking-[-1px] text-white"
          aria-hidden="true"
        >
          YW
        </div>
        <p className="mb-2 text-[1rem] font-extrabold tracking-[0.13em] text-[#6a89a7]">
          WELCOME BACK
        </p>
        <h1
          id="login-title"
          className="m-0 text-[clamp(1.7rem,5vw,2.15rem)] font-bold tracking-[-0.04em] text-[#384959]"
        >
          Sign in to Yeti Wear
        </h1>
        <p className="my-3 mb-[30px] leading-[1.55] text-[#6a89a7]">
          Enter your details to continue shopping your favourites.
        </p>

        <form className="grid gap-2.5" onSubmit={handleSubmit}>
          <label
            className="text-[0.9rem] font-bold text-[#384959]"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
            className="min-h-[50px] w-full rounded-[10px] border border-[#c9dceb] bg-white px-[14px] text-[#384959] outline-none transition focus:border-[#88bdf2] focus:shadow-[0_0_0_4px_rgba(136,189,242,0.2)]"
          />

          <div className="mt-3 flex justify-between">
            <label
              className="text-[0.9rem] font-bold text-[#384959]"
              htmlFor="password"
            >
              Password
            </label>
            <a
              className="text-[0.86rem] font-bold text-[#4e91d4] hover:underline"
              href="#forgot-password"
            >
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
              className="min-h-[50px] w-full rounded-[10px] border border-[#c9dceb] bg-white py-0 pl-[14px] pr-16 text-[#384959] outline-none transition focus:border-[#88bdf2] focus:shadow-[0_0_0_4px_rgba(136,189,242,0.2)]"
            />
            <button
              className="absolute top-1/2 right-[9px] -translate-y-1/2 cursor-pointer border-0 bg-transparent p-[7px] text-[0.8rem] font-extrabold text-[#4e91d4]"
              type="button"
              onClick={() => setShowPassword((visible) => !visible)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <label className="my-2.5 mb-3 flex cursor-pointer items-center gap-[9px]">
            <input
              className="size-4 accent-[#88bdf2]"
              type="checkbox"
              name="remember"
            />
            <span className="text-[0.88rem] font-normal text-[#6a89a7]">
              Remember me for 30 days
            </span>
          </label>

          <button
            className="min-h-[52px] cursor-pointer rounded-[10px] border-0 bg-[#384959] font-extrabold text-white transition hover:-translate-y-px hover:bg-[#88bdf2]"
            type="submit"
          >
            Sign in
          </button>
          {submitted && (
            <p
              className="m-0 mt-1 text-center text-[0.9rem] font-bold text-[#23845a]"
              role="status"
            >
              Signed in successfully.
            </p>
          )}
        </form>

        <p className="m-0 mt-[27px] text-center text-[0.9rem] text-[#6a89a7]">
          New to Yeti Wear?{" "}
          <a
            className="font-bold text-[#4e91d4] hover:underline"
            href="#create-account"
          >
            Create an account
          </a>
        </p>
      </section>
    </main>
  );
}

export default Login;
