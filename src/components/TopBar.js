import React from "react";

function TopBar() {
    return (
        <header className="topbar">
            <div>
                <h1 className="page-title">Dashboard</h1>
                <input className="date-input" type="date" />
            </div>

            <div className="topbar-right">
                <button className="icon-btn">🌙</button>
                <button className="icon-btn">🔔</button>

                <div className="admin-info">
                    <div className="admin-avatar">A</div>
                    <div>
                        <div className="admin-name">ADMIN</div>
                        <div className="admin-role">Admin . Paris</div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default TopBar;