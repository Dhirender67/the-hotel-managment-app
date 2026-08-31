function Spinner({ size = "w-12 h-12", color = "border-4 border-yellow-500" }) {
  return (
    <div
      className={`${size} ${color} rounded-full animate-spin border-solid  border-t-transparent`}
    ></div>
  );
}

export default Spinner;
