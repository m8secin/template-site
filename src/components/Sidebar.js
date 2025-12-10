import React from "react";

const menuItems = [
    { icon: "📊", label: "Dashboard" },
    { icon: "👨‍🎓", label: "Students" },
    { icon: "✅", label: "Attendance" },
    { icon: "💬", label: "Messages", badge: 14 },
    { icon: "📅", label: "Booking" },
    { icon: "📄", label: "Reports" },
    { icon: "⚙️", label: "Settings" },
    { icon: "📝", label: "FeedBack" },
    { icon: "➕", label: "Add profile" },
];

function Sidebar() {
    return (
        <aside className="Sidebar">
            <div className="logo">
                <span className="logo-main">MD</span>
                <span className="logo-accent">ADMIN</span>
            </div>

            <nav className="menu">
                {menuItems.map((item) => (
                    <div
                        key={item.label}
                        className={`menu-item ${item.label === "Dashboard" ? "active" : ""}`}
                    >
                        <span className="menu-icon">{item.icon}</span>
                        <span className="menu-label">{item.label}</span>
                        {item.badge && <span className="menu-badge">{item.badge}</span>}
                    </div>
                ))}
            </nav>

            <button className="logout-btn">🚪 logout</button>
        </aside>
    );
}

export default Sidebar;
