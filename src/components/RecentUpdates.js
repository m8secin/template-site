import React from "react";

const updates = [
    { user: "user_4", text: "send a class report" },
    { user: "User_34", text: "ended his class" },
    { user: "User_3", text: "ended his class" },
];

function RecentUpdates() {
    return (
        <div className="card updates-card">
            <div className="card-header">Recent Updates</div>
            <ul className="updates-list">
                {updates.map((item) => (
                    <li key={item.user}>
                        <strong>{item.user}</strong> {item.text}

                    </li>
                ))}
            </ul>
        </div>

    );
}

export default RecentUpdates;
