function Button({
  children,
  onClick,
  disabled,
  variation,
  onSubmit,
  type = "button",
}) {
  const spacing = " px-5 py-2 rounded-md";
  const style = {
    primary: spacing + " bg-indigo-600  text-white hover:bg-indigo-700",
    ternary:
      spacing + " border border-gray-300 text-gray-700 hover:bg-gray-100",
    danger: spacing + " bg-red-600  text-white hover:bg-red-700",
    warning: spacing + " bg-yellow-600  text-white hover:bg-yellow-700",
  };
  return (
    <button
      disabled={disabled}
      type={type}
      className={style[variation]}
      onSubmit={onSubmit}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
