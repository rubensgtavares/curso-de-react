function Button(props){
    return <button {...props}
    className="bg-slate-400 text-white p-2 rounded-md
    cursor-pointer hover:bg-slate-500 transition-colors">
        {props.children}
    </button>
};

export default Button; 