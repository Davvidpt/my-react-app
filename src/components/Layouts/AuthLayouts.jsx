
const AuthLayouts = (props) => {
    const{children, title}=props;
    
    return (
        <div className="w-full shadow-lg border border-gray-100 p-8 rounded-lg max-w-xs">
          <h1 className="text-yellow-500 font-bold text-3xl mb-2">{title}</h1>
          <p className="font-medium text-salte-500 mb-8">
            Welcome, please enter your details
          </p>
          {children}
        </div>
    )
}
export default AuthLayouts;