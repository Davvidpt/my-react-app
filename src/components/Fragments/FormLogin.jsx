import Inputform from "../Elements/Input/Input";
import Button from "../Elements/Button/Button";

const FormLogin = (props) => {
  return (
    <form action="">
      <Inputform
        children="Email"
        type="mail"
        name="email"
        placeholder="Email"
      />
      <Inputform
        children="Password"
        type="password"
        name="password"
        placeholder="password"
      />
      <Button classname="bg-yellow-500 w-full" textCl="text-white">
        Login
      </Button>{" "}
    </form>
  );
};
export default FormLogin;
