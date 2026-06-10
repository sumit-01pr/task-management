function Select({
  value,
  onChange,
  options = [],
}) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full h-12 px-4 border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition"
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;