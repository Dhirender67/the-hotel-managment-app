function Select({ options, value, onChange }) {
  return (
    <>
      <select
        className="
    text-base
    px-5 py-2
    border
    border-gray-300
    rounded
    bg-white
    font-medium
    shadow-sm
  "
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
