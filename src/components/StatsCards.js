import React from "react";

const cards = [
    { title: "Class", value: "16/20", subtitle: "today", percent: 80, icon: "📈" },
    { title: "Attendance", value: "49/55", subtitle: "today", percent: 89, icon: "👜" },
    { title: "Progress", value: "100/100", subtitle: "last 24 hours", percent: 100, icon: "✅" },
];

function StatsCards() {
    return (
        <div className="stats-cards">
            {cards.map((card) => (
                <div className="stat-card" key={card.title}>
                    <div className="stat-left">
                        <div className="stat-icon">{card.icon}</div>
                        <div>
                            <div className="stat-title">{card.title}</div>
                            <div className="stat-value">{card.value}</div>
                            <div className="stat-subtitle">{card.subtitle}</div>
                        </div>
                    </div>

                    <div className="stat-right">
                        <div className="stat-circle">
                            <span>{card.percent}%</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StatsCards;
