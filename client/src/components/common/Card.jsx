function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`bg-white rounded-3xl border border-slate-100 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;