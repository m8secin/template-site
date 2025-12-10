import React from "react";

const activities = [
    { user: "User_2", status: "Last seen 2 hours ago", code: 3849 },
    { user: "User_34", status: "Online now", code: 3848 },
    { user: "User_1", status: "Last seen 4 hours ago", code: 3847 },
];

function TutorActivities() {
    return (
        <div className="card tutor-card">
            <div className="card-header">Tutor Activities</div>

            <div className="tutor-list">
                {activities.map((tutor) => (
                    <div className="tutor-item" key={tutor.code}>
                        <div className="tutor-icon">👤</div>
                        <div className="tutor-info">
                            <div className="tutor-name">{tutor.user}</div>
                            <div className="tutor-status">{tutor.status}</div>
                            <div className="tutor-code">{tutor.code}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TutorActivities;
