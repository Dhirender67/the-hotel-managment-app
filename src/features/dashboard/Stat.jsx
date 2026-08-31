function Stat({ icon, title, value, color }) {
  return (
    <div className="flex flex-1 gap-4 rounded-md border border-gray-200 bg-white p-6">
      {/* Icon */}
      <div
        className={`text-lg flex size-14 items-center justify-center rounded-full
          bg-${color}-100
          text-${color}-700`}
      >
        {icon}
      </div>

      <div className="flex flex-col">
        {/* Title */}
        <h5 className=" text-base font-semibold uppercase tracking-[0.4px] text-gray-500">
          {title}
        </h5>

        {/* Value */}
        <p className="text-2xl font-medium leading-none">{value}</p>
      </div>
    </div>
  );
}

export default Stat;
