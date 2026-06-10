function Textarea({
  placeholder,
  value,
  onChange,
  rows = 4,
}) {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none resize-none focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition"
    />
  );
}

export default Textarea;