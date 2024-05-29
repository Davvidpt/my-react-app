import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const Error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <p className="text-red-500 font-bold text-3xl mb-2">
        Oppss you seem lost to a world full of monsters
      </p>
      <p>{Error.statusText || Error.message}</p>
      <br />
      <br />
    </div>
  );
};

export default ErrorPage;
