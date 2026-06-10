function StatsCard({
    title,
    value,
    subtitle,
    icon,
    iconBg,
}) {
    return (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition-all duration-300">

            <div className="flex items-center  justify-between">

                <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${iconBg}`}
                >
                    {icon}
                </div>
                <div className="mt-4 ">

                    <p className="text-sm text-slate-500 font-medium">
                        {title}
                    </p>

                    <h2 className="text-4xl font-bold text-slate-900 mt-1">
                        {value}
                    </h2>

                    <p className="text-sm text-slate-400 mt-2">
                        {subtitle}

                    </p>

                </div>
                <div className="mt-20">
                    <svg
                        width="60"
                        height="30"
                        viewBox="0 0 60 30"
                        fill="none"
                    >
                        <path
                            d="M1 24L10 22L18 26L28 10L36 12L45 4L59 6"
                            stroke="#6366F1"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                </div>
            </div>

        </div>
    );
}

export default StatsCard;