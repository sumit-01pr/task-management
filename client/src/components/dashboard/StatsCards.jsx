import {
  ClipboardList,
  Clock3,
  CheckCircle2,
  CalendarDays,
} from "lucide-react";

import StatsCard from "./StatsCard";

function StatsCards({
  totalTasks,
  pendingTasks,
  completedTasks,
}) {
  const cards = [
    {
      title: "Total Tasks",
      value: totalTasks,
      subtitle: "All your tasks",
      icon: <ClipboardList size={26} className="text-violet-600" />,
      iconBg: "bg-violet-100",
    },
    {
      title: "Pending",
      value: pendingTasks,
      subtitle: "Tasks to do",
      icon: <Clock3 size={26} className="text-amber-500" />,
      iconBg: "bg-amber-100",
    },
    {
      title: "Completed",
      value: completedTasks,
      subtitle: "Tasks done",
      icon: <CheckCircle2 size={26} className="text-green-600" />,
      iconBg: "bg-green-100",
    },
    {
      title: "Today",
      value: totalTasks, // adjust if you have real "today" data
      subtitle: "Created today",
      icon: <CalendarDays size={26} className="text-blue-600" />,
      iconBg: "bg-blue-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
      {cards.map((card, index) => (
        <StatsCard
          key={index}
          title={card.title}
          value={card.value}
          subtitle={card.subtitle}
          icon={card.icon}
          iconBg={card.iconBg}
        />
      ))}
    </div>
  );
}

export default StatsCards;