function DataItem({ icon, label, children }) {
  return (
    <div className="flex items-center gap-6 py-2">
      <span className="flex items-center gap-3 font-medium">
        <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-blue-600">
          {icon}
        </span>

        <span>{label}</span>
      </span>

      {children}
    </div>
  );
}

export default DataItem;
