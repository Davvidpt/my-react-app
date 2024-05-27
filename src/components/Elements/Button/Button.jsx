const Button = (props) => {
    const {children= ".." ,classname = "bg-slate-700", textCl } = props;
    return (
      <button className={`h-10 px-6 font-semibold rounded-md ${classname} ${textCl}`} type="submit">
        {children}
    </button>
    );
  }

  export default Button;