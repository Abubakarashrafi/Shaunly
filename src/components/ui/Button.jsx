
const Button = ({
    onClick,
    children,
    icon,
    className = "",
    
}) => {
    return (
        <button
            onClick={onClick}
            className=  {`mt-2 w-full py-1 bg-black text-white rounded-md hover:bg-slate-800 text-xl"
          ${className}`}
           
        >
            {icon && <span>{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
