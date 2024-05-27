import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const registerPage = () => {
    return (
                <AuthLayouts title="Login">
                    <FormLogin></FormLogin>
                </AuthLayouts>
    );
};

export default LoginPage;