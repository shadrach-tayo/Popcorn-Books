export function ErrorFallback({ error }: any) {
  const formatted =
    typeof error === "string"
      ? error
      : error?.message
        ? error.message
        : error?.error?.message
          ? error.error.message
          : "An Unknown error occured, reload the page!!!";
  return (
    <div
      role="alert"
      className="mx-5 md:mx-0 flex flex-col items-center justify-center"
    >
      <span>There was an error: </span>
      <pre>{formatted}</pre>
    </div>
  );
}

export function AppFallback({ error }: any) {
  const formatted = typeof error === "string" ? error : error?.message;
  return (
    <div role="alert" className="mx-5 md:mx-0 flex flex-col items-center justify-center">
      <span>There was an error, try reloading the app!!! </span>
      <pre>{formatted}</pre>
    </div>
  );
}

export function ErrorMessage({ error }: { error: string }) {
  return <h2 className="text-center text-crimson">{error}</h2>
}