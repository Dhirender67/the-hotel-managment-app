import Button from "./Button";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <main className="h-screen bg-neutral-100 flex items-center justify-center p-[4.8rem]">
        <div className=" bg-white shadow-lg rounded p-[4.8rem] flex-[0_1_96rem] text-center">
          <h1 className="mb-[1.6rem] text-3xl font-semibold">
            Something went wrong 🧐
          </h1>

          <p className="font-sono text-base mb-[3.2rem] text-[var(--color-grey-500)]">
            {error.message}
          </p>
          <Button variation="primary" onClick={resetErrorBoundary}>
            Try Again
          </Button>
        </div>
      </main>
    </>
  );
}

export default ErrorFallback;
