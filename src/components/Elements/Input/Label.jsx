const Label = (props) => {
    const {name,children} = props;
    return (
        <label htmlFor={name} className="block text-slate-700 mb-6 text-sm font-bold mb-2">
                {children}
       </label>
    );
};

export default Label;