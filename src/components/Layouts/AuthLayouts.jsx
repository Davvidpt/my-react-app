import LoginPage from "../../pages/login";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full shadow-lg border border-gray-100 p-8 rounded-lg max-w-xs">
        <h1 className="text-yellow-500 font-bold text-3xl mb-2">{title}</h1>
        <p className="font-medium text-salte-500 mb-8">
          Welcome, please enter your details....
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="mt-4 ml-4 text-sm text-center">
        Don't have an account?
        <Link to="/register" className="text-blue-500 ">
          {" "}
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="mt-4 ml-4 text-sm text-center">
        Already have an account?
        <Link to="/login" className="text-blue-500 ">
          {" "}
          Login
        </Link>
      </p>
    );
  }
};
export default AuthLayouts;
