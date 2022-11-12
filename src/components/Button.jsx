function Button(props) {
  const { className = 'bg-blue', text, children } = props;
  return (
    <button
      {...props}
      className={`${className} px-8 py-3 border-2 border-blue rounded-lg border-solid bg-transparent text-light text-xl hover:bg-semilight hover:outline-2 hover:border-[#37b9de]`}>
      {text || children}
    </button>
  );
}

export default Button;
