const styles = {
  blue: "bg-blue-100 text-blue-700",
  green: "bg-green-100 text-green-700",
  silver: "bg-gray-200 text-gray-700",
};

function Tag({ type, children }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${styles[type]}`}
    >
      {children}
    </span>
  );
}

export default Tag;
